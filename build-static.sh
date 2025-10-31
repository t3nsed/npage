#!/bin/bash

echo "Building static site..."
npm run build

echo "Creating deployment package..."
mkdir -p deploy
cp -r dist/* deploy/

echo "Creating Nginx configuration file..."
cat > deploy/nginx.conf << 'EOL'
server {
    listen 80;
    server_name your-domain.com;  # Replace with your actual domain
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
EOL

echo "Creating deployment instructions..."
cat > deploy/README.md << 'EOL'
# Portfolio Site Deployment

## Deployment Instructions

1. Upload all files to your VPS in the directory `/var/www/portfolio`
   ```
   scp -r * user@your-vps-ip:/var/www/portfolio/
   ```

2. Set up Nginx:
   - Copy the nginx.conf file to your Nginx sites-available directory:
     ```
     sudo cp nginx.conf /etc/nginx/sites-available/portfolio
     ```
   - Create a symbolic link to enable the site:
     ```
     sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
     ```
   - Test the Nginx configuration:
     ```
     sudo nginx -t
     ```
   - Reload Nginx:
     ```
     sudo systemctl reload nginx
     ```

3. Your site should now be accessible at your domain!

## Troubleshooting

- Make sure your domain is pointing to your VPS IP address
- Check Nginx logs if you encounter any issues:
  ```
  sudo tail -f /var/log/nginx/error.log
  ```
EOL

echo "Done! Your static site is ready for deployment in the 'deploy' directory."
echo "Follow the instructions in deploy/README.md to deploy to your VPS." 