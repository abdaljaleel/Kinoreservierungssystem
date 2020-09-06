pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                dir("Test/test") {
                    sh "pwd"
                    sh 'mvn -B -DskipTests clean package'
                }
            }
        }
        stage('Test') {
            steps {
                dir("Test/test") {
                    sh "pwd"
                    sh 'mvn test'
                }
            }
            post {
                always {
                    dir("Test/test") {
                        junit 'target/surefire-reports/*.xml'
                    }
                }
            }
        }
    }
}