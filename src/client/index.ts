import net, { Socket } from 'net'

const options = {
    host : '127.0.0.1',
    port : 5678
}

const tcp_client = new net.Socket()


// 连接 tcp client
tcp_client.connect(options,function() {
    console.log('connected to Server')
    tcp_client.write('I am tcp_client of node!')
})

// 接收数据
tcp_client.on('data',function(data: Buffer){
    console.log('received data: %s from client', data.toString())
})

tcp_client.on('end',function(){
    console.log('data end!')
})

tcp_client.on('error', function() {
    console.log('tcp_client error!')
})