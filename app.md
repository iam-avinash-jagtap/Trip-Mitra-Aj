# 🚀 Deployment Guide: Running wonderly on AWS EC2

This guide providing step-by-step instructions to deploy the wonderly application on an AWS EC2 instance using Docker.

---

## 1. Connect to your EC2 Instance
Open your terminal and SSH into your instance using your private key (`.pem` file):

```bash
ssh -i "your-key.pem" ec2-user@your-ec2-public-ip
```

---

## 2. Update System & Install Docker
Ensure your system is up to date and install the Docker engine.

```bash
# Update packages
sudo yum update -y

# Install Docker (for Amazon Linux 2 or 2023)
sudo yum install docker -y

# Start Docker service
sudo service docker start

# Add your user to the docker group so you can run commands without 'sudo'
sudo usermod -a -G docker ec2-user
```
> **Note:** After running `usermod`, log out and log back in for the changes to take effect.

---

## 3. Install Docker Compose
Download and install the Docker Compose binary.

```bash
# Download Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Apply executable permissions
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version
```

---

## 4. Clone the Repository
Clone your project code from GitHub/GitLab to the EC2 instance.

```bash
# Replace with your actual repository URL
git clone https://github.com/your-username/wonderly.git

# Move into the project directory
cd wonderly
```

---

## 5. Launch the Application
Use Docker Compose to build and start all services (Frontend, Backend, and MongoDB) in detached mode.

```bash
# Build and start services
docker-compose up -d --build
```

---

## 6. Configure AWS Security Group (Crucial)
For the website to be accessible from the internet, you must open the specific ports in your AWS EC2 Security Group:

1.  Go to the **AWS Management Console**.
2.  Navigate to **EC2 > Running Instances**.
3.  Select your instance and click on the **Security** tab.
4.  Click on the **Security Group** ID.
5.  Click **Edit inbound rules** and add:
    *   **Custom TCP**: Port `3000` | Source: `0.0.0.0/0` (Frontend)
    *   **Custom TCP**: Port `5000` | Source: `0.0.0.0/0` (Backend API - *Optional*)

---

## 7. Verify the Deployment
Once started, you can access your application at:
*   **Frontend:** `http://your-ec2-public-ip:3000`
*   **Backend:** `http://your-ec2-public-ip:5000`

### Useful Docker Commands:
*   Check running containers: `docker ps`
*   View logs: `docker-compose logs -f`
*   Stop application: `docker-compose down`
