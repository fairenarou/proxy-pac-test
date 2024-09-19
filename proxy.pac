function FindProxyForURL(url, host) {
    var internalHost = "intranet.seudominio.com.br";
    var directHosts = [
        "*.manage.microsoft.com",
        "*.windowsupdate.com",
        "*.microsoftonline.com",
        "*.msftauth.net",
        "*.msauth.net",
        "*.microsoft.com",
        "*.smd.msft.net",
        "login.live.com",
        "login.microsoftonline.com",
    ];
    function isInDirectHosts(host) {
        for (var i = 0; i < directHosts.length; i++) {
            if (shExpMatch(host, directHosts[i])) {
                return true;
            }
        }
        return false;
    }

    if (isInDirectHosts(host)) {
        return "DIRECT";
    }

    if (dnsResolve(internalHost)) {
        return "DIRECT";
    } else {
        return "PROXY proxy.lacasella.com.br:4443";
    }
}
