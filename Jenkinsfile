pipeline {
    agent any

    parameters
            {
                string(name: 'BRANCH', defaultValue: 'feature', description: 'pass branch value')
            }

    stages {
        stage('BuildSQL') {
            steps {
                sh """
                    docker --version
    
                    ls -la
                    
                    echo 'SQL is builded'
                """
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}