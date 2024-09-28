#!/bin/bash

# Set up your GitHub repository URL and branch name
REPO_URL="https://github.com/sandeepkumawat9829/Angular-Workshop.git" # Replace with your repo URL
BRANCH="main" # Replace with your branch name if different

# Check if the repository is already initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git remote add origin $REPO_URL
fi

# Pull the latest changes to avoid conflicts (optional)
git pull origin $BRANCH --rebase

# Add all changes including files in subdirectories
git add .

# Commit the changes with a message
commit_message="commit on $(date)"
git commit -m "$commit_message"

# Push the changes to the remote repository
echo "Pushing changes to the repository..."
git push -u origin $BRANCH

echo "All files pushed successfully!"
