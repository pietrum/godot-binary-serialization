extends Node

const HOST = "127.0.0.1"
const PORT = 1337

# properties
var connectionStatus = StreamPeerTCP.STATUS_NONE
var streamPeerTCP
var packetPeerStream

func send_test_data():
	print("sending test data")
	streamPeerTCP.put_var({
		"testing": 5.5
	})

func _ready():
	# not connected (yet)
	self.set_process(false)

	# TCP connection
	streamPeerTCP = StreamPeerTCP.new();
	streamPeerTCP.connect_to_host(HOST, PORT)

	packetPeerStream = PacketPeerStream.new()
	packetPeerStream.set_stream_peer(streamPeerTCP)

	# manage connection
	self.set_process(true)

func _process(delta):
	if (connectionStatus != streamPeerTCP.get_status()):
		connectionStatus = streamPeerTCP.get_status()

		if (connectionStatus == streamPeerTCP.STATUS_CONNECTED):
			print("connection established")
			send_test_data()
		elif (connectionStatus == streamPeerTCP.STATUS_ERROR):
			streamPeerTCP.disconnect_from_host()
		elif (connectionStatus == streamPeerTCP.STATUS_NONE):
			print("connection terminated")
			self.set_process(false)

	# data handler
	if (connectionStatus == StreamPeerTCP.STATUS_CONNECTED and
		packetPeerStream.get_available_packet_count() > 0):
			printt(packetPeerStream.get_var())
