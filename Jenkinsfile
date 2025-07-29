@Library("Shared") _
pipeline {
    
    agent { label "codey" }
    
    stages {
        
        stage("Hello") {
            steps {
                script {
                    hello()
                }
            }
        }
        
        stage("Code") {
            steps {
                script {
                    git_clone("https://github.com/Souraevshing/aws-jenkins-demo.git", "main")
                }
            }
        }
        
        stage("Build") {
            steps {
                script {
                    docker_build("jenkins-app", "latest", "sauraevshing")
                }
            }
        }
        
        stage("Push to DockerHub") {
            steps {
                script {
                    docker_push("jenkins-app", "latest", "sauraevshing")
                }
            }
        }
        
        stage("Deploy") {
            steps {
                echo "Deploying the app"
                sh '''
                    OLD_CONTAINER_ID=$(docker ps -q --filter "publish=5000-5000/tcp")
                    if [ ! -z "$OLD_CONTAINER_ID" ]; then
                        echo "Port 5000 is in use. Stopping old container..."
                        docker stop $OLD_CONTAINER_ID || true
                        docker rm $OLD_CONTAINER_ID || true
                    fi

                    sudo docker run -d -p 5000:5000 --name jenkins-app jenkins-app:latest
                '''
                echo "App deployed successfully"
            }
        }
        
    }
}