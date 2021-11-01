pipeline {
    agent {
        label "go"
    }
    stages {
        stage("Build") {
            steps {
                sh "go build ."
            }
        }
    }
}
