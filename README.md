# Deploy-a-Node.js-Application-On-AWS-EC2
Deploying a Node.js Application On AWS EC2 Amazon Linux 2

1. Create EC2 instance in your AWS console

2. Open an SSH client.

3. Locate your private key file. The key used to launch this instance is yourprivatefile.pem

4. Run command line 
   Example: ssh -i "yourprivatefile.pem" user@ec2-3-xx-xx-xx.us-east-2.compute.amazonaws.com
   
5. Run command line  
    sudo yum install -y gcc-c++ make

6. Run command line 
    curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -

7. Run command line 
    sudo yum install -y nodejs

8. Run command line 
    sudo yum install -y git

9. Run command line 
    git clone https://github.com/Shabber1412/Deploy-a-Node.js-Application-On-AWS-EC2.git

10. Run command line  
      ls
      
    you will find like this
    Deploy-a-Node.js-Application-On-AWS-EC2

11. cd Deploy-a-Node.js-Application-On-AWS-EC2

12. Run command line  
      ls
      you will find all the files like " index.js  package.json  package-lock.json "

13. Run command 
      node index.js
      
