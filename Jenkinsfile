pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                dir("Quellcode/Backend/Java") {
                    sh "pwd"
                    sh 'mvn -B -DskipTests clean package'
                }
            }
        }
        stage('Test') {
            steps {
                dir("Quellcode/Backend/Java") {
                    sh "pwd"
                    sh 'mvn test'
                }
            }
            post {
                always {
                    dir("Quellcode/Backend/Java") {
                        junit 'target/surefire-reports/*.xml'
                    }
                }
            }
        }
    }
}