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
    }
}