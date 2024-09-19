function FindProxyForURL(url, host) {
    // Substitua pelo seu hostname interno
    var internalHost = "intranet.seudominio.com.br";

    if (dnsResolve(internalHost)) {
        // Conexão interna detectada, não usa proxy
        return "DIRECT";
    } else {
        // Conexão externa, usa o proxy
        return "PROXY proxy.lacasella.com.br:4443";
    }
}
