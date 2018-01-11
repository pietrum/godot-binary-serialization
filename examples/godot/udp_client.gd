extends Node

const HOST = "127.0.0.1"
const PORT = 1337

# properties
var connectionStatus = StreamPeerTCP.STATUS_NONE
var packetPeerStream
var packetPeerUDP

func _ready():
	# not connected (yet)
	self.set_process(false)

	# UDP connection
	packetPeerUDP = PacketPeerUDP.new()
	packetPeerUDP.set_dest_address(HOST, PORT)

	packetPeerUDP.put_var({
		"testing": 5.5
	})

	# manage connection
	self.set_process(true)

func _process(delta):
	if (packetPeerUDP.get_available_packet_count() > 0):
		printt(packetPeerUDP.get_var())
