

var child_process = require('child_process')


class Hexo {
    constructor() {
    }
    start(server) {
        this.generate(server);
    }
    generate(server) {
        server.get("/hexo/generate", (req, resp) => {
            var command = "cd /data/hexo-server-nodejs; sh generate-hexo.sh";
            child_process.exec(command, (err, out, errStr) => {
                console.log(err);
                console.log(out);
                console.log(errStr);
                if (err != null) {
                    resp.send(err);
                }
                else {
                    resp.send({ "result": 0 });
                }
            });
        });
    }
}



module.exports = {
    Hexo: Hexo
}
