/**
 * 環境変数の設定
 */
class ProcessEnvironment {
  constructor(port = 8080) {
    this.API_FQND = `localhost:${port}`;
    this.PROTOCOL = "http";
  }

  toJson() {
    return {
      API_FQND: JSON.stringify(this.API_FQND),
      PROTOCOL: JSON.stringify(this.PROTOCOL)
    };
  }
}

exports.ProcessEnvironment = ProcessEnvironment;
