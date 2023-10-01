pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..!'
                sh "echo 'bbbb'"
                sh "cd ./member/src/test/java/com/tgd/member/domain/member/service"
                sh "java -cp .:junit.jar:hamcrest-core.jar org.junit.runner.JUnitCore AccountServiceTest"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..!'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..!'
            }
        }
    }
}