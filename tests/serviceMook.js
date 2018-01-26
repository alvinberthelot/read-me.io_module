function getTemplates()
{
    return new Promise(function (resolve, reject) {
        resolve(["basic","csharp","java","node","python"]);
    });
}

function getExtensions()
{
    return new Promise(function (resolve, reject) {
        resolve(["asciidoc","markdown","txt"]);
    });
}

module.exports = {
  getExtensions: getExtensions,
  getTemplates: getTemplates
};
