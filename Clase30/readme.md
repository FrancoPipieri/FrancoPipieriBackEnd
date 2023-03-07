// node server.js -m cluster -p 8080
// node server.js -m fork -p 8080

// pm2 start server.js -- -p 8080 -m fork
// pm2 start server2.js -f -- -p 8081 -m fork

-pm2 modo fork: pm2 start server.js --name="ServerFranco" --watch -- -p 8081
-pm2 modo cluster: pm2 start server.js --name="ServerFranco2" --watch -i max -- -p 8082

// pm2 start server.js --name="ServerFranco2" --watch -i max -- -p 8082
// pm2 start server.js --name="ServerFranco2" --watch -i max -- -p 8083
// pm2 start server.js --name="ServerFranco2" --watch -i max -- -p 8084
// pm2 start server.js --name="ServerFranco2" --watch -i max -- -p 8085
