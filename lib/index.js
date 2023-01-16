module.exports = [
  {
    id: 'dataproc-cluster-connect',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension dataproc-cluster-connect is activated!'
      );
      console.log(app.commands);
    }
  }
];
