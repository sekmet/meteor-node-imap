Package.describe({
	summary: "Meteor smart package for node-imap."
});

Npm.depends({
  "utf7": "1.0.0",
  "imap": "0.8.16"
});

Package.on_use(function (api, where) {
  api.add_files('imap-server.js', 'server');
  api.export(['Imap'], 'server');
});
