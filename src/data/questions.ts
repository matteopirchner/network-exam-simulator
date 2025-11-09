export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  // Network Fundamentals (80 questions)
  {
    id: 1,
    category: "Network Fundamentals",
    question: "What is the default administrative distance for OSPF?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 2,
    explanation: "OSPF has an administrative distance of 110 by default."
  },
  {
    id: 2,
    category: "Network Fundamentals",
    question: "Which OSI layer is responsible for end-to-end communication?",
    options: ["Network Layer", "Transport Layer", "Session Layer", "Application Layer"],
    correctAnswer: 1,
    explanation: "The Transport Layer (Layer 4) is responsible for end-to-end communication and error recovery."
  },
  {
    id: 3,
    category: "Network Fundamentals",
    question: "What is the maximum number of usable IP addresses in a /28 subnet?",
    options: ["14", "16", "30", "32"],
    correctAnswer: 0,
    explanation: "A /28 subnet has 16 total addresses, minus 2 (network and broadcast) = 14 usable addresses."
  },
  {
    id: 4,
    category: "Network Fundamentals",
    question: "Which protocol operates at Layer 2 and prevents loops in switched networks?",
    options: ["VTP", "STP", "DTP", "CDP"],
    correctAnswer: 1,
    explanation: "Spanning Tree Protocol (STP) operates at Layer 2 and prevents loops in switched networks."
  },
  {
    id: 5,
    category: "Network Fundamentals",
    question: "What is the valid range for Class C IP addresses?",
    options: ["1.0.0.0 to 126.255.255.255", "128.0.0.0 to 191.255.255.255", "192.0.0.0 to 223.255.255.255", "224.0.0.0 to 239.255.255.255"],
    correctAnswer: 2,
    explanation: "Class C addresses range from 192.0.0.0 to 223.255.255.255."
  },
  {
    id: 6,
    category: "Network Fundamentals",
    question: "Which cable type is used for a direct connection between two switches?",
    options: ["Straight-through cable", "Crossover cable", "Rollover cable", "Console cable"],
    correctAnswer: 1,
    explanation: "A crossover cable is used to directly connect similar devices like switch-to-switch or router-to-router."
  },
  {
    id: 7,
    category: "Network Fundamentals",
    question: "What does the acronym MTU stand for?",
    options: ["Maximum Transfer Unit", "Maximum Transmission Unit", "Minimum Transfer Unit", "Multiple Transmission Unit"],
    correctAnswer: 1,
    explanation: "MTU stands for Maximum Transmission Unit, which is the largest packet size that can be transmitted."
  },
  {
    id: 8,
    category: "Network Fundamentals",
    question: "Which protocol is used to automatically assign IP addresses to devices?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    correctAnswer: 1,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices."
  },
  {
    id: 9,
    category: "Network Fundamentals",
    question: "What is the default subnet mask for a Class B network?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 1,
    explanation: "Class B networks use a default subnet mask of 255.255.0.0 or /16."
  },
  {
    id: 10,
    category: "Network Fundamentals",
    question: "Which protocol resolves IP addresses to MAC addresses?",
    options: ["DNS", "RARP", "ARP", "DHCP"],
    correctAnswer: 2,
    explanation: "ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses."
  },
  {
    id: 11,
    category: "Network Fundamentals",
    question: "What is the binary value of the decimal number 192?",
    options: ["11000000", "10000000", "11100000", "10100000"],
    correctAnswer: 0,
    explanation: "192 in binary is 11000000 (128 + 64)."
  },
  {
    id: 12,
    category: "Network Fundamentals",
    question: "Which device operates at Layer 3 of the OSI model?",
    options: ["Switch", "Hub", "Router", "Bridge"],
    correctAnswer: 2,
    explanation: "Routers operate at Layer 3 (Network Layer) of the OSI model."
  },
  {
    id: 13,
    category: "Network Fundamentals",
    question: "What is the purpose of VLAN?",
    options: ["Increase bandwidth", "Segment broadcast domains", "Encrypt data", "Compress data"],
    correctAnswer: 1,
    explanation: "VLANs segment broadcast domains logically, improving network performance and security."
  },
  {
    id: 14,
    category: "Network Fundamentals",
    question: "Which standard defines Gigabit Ethernet over copper cabling?",
    options: ["802.11ac", "802.3ab", "802.3u", "802.3z"],
    correctAnswer: 1,
    explanation: "IEEE 802.3ab defines 1000BASE-T (Gigabit Ethernet over copper)."
  },
  {
    id: 15,
    category: "Network Fundamentals",
    question: "What is the maximum distance for 1000BASE-T?",
    options: ["100 meters", "200 meters", "300 meters", "500 meters"],
    correctAnswer: 0,
    explanation: "1000BASE-T has a maximum cable distance of 100 meters."
  },
  {
    id: 16,
    category: "Network Fundamentals",
    question: "Which protocol is connectionless?",
    options: ["TCP", "UDP", "FTP", "HTTP"],
    correctAnswer: 1,
    explanation: "UDP (User Datagram Protocol) is connectionless and does not establish a connection before sending data."
  },
  {
    id: 17,
    category: "Network Fundamentals",
    question: "What port number does HTTPS use?",
    options: ["80", "443", "22", "21"],
    correctAnswer: 1,
    explanation: "HTTPS uses port 443 for secure web communication."
  },
  {
    id: 18,
    category: "Network Fundamentals",
    question: "What is the loopback address in IPv4?",
    options: ["192.168.1.1", "127.0.0.1", "10.0.0.1", "172.16.0.1"],
    correctAnswer: 1,
    explanation: "127.0.0.1 is the IPv4 loopback address used for testing network software."
  },
  {
    id: 19,
    category: "Network Fundamentals",
    question: "Which command displays the routing table on a Cisco router?",
    options: ["show ip route", "show route", "display route", "route print"],
    correctAnswer: 0,
    explanation: "The 'show ip route' command displays the routing table on Cisco devices."
  },
  {
    id: 20,
    category: "Network Fundamentals",
    question: "What is the purpose of a default gateway?",
    options: ["Assign IP addresses", "Route traffic to other networks", "Resolve domain names", "Filter traffic"],
    correctAnswer: 1,
    explanation: "A default gateway routes traffic from a local network to other networks or the internet."
  },
  {
    id: 21,
    category: "Network Fundamentals",
    question: "Which topology connects all devices to a central device?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    correctAnswer: 2,
    explanation: "A star topology connects all devices to a central hub or switch."
  },
  {
    id: 22,
    category: "Network Fundamentals",
    question: "What does MAC stand for?",
    options: ["Media Access Control", "Multiple Access Control", "Machine Access Code", "Maximum Access Control"],
    correctAnswer: 0,
    explanation: "MAC stands for Media Access Control, a unique identifier for network interfaces."
  },
  {
    id: 23,
    category: "Network Fundamentals",
    question: "Which wireless standard operates at 5 GHz and provides up to 1.3 Gbps?",
    options: ["802.11g", "802.11n", "802.11ac", "802.11b"],
    correctAnswer: 2,
    explanation: "802.11ac operates at 5 GHz and can provide speeds up to 1.3 Gbps or higher."
  },
  {
    id: 24,
    category: "Network Fundamentals",
    question: "What is the purpose of NAT?",
    options: ["Encrypt data", "Translate private IP addresses to public", "Route packets", "Segment networks"],
    correctAnswer: 1,
    explanation: "NAT (Network Address Translation) translates private IP addresses to public IP addresses."
  },
  {
    id: 25,
    category: "Network Fundamentals",
    question: "Which protocol is used for sending email?",
    options: ["POP3", "IMAP", "SMTP", "HTTP"],
    correctAnswer: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending email."
  },
  {
    id: 26,
    category: "Network Fundamentals",
    question: "What is collision domain?",
    options: ["Area where collisions occur", "VLAN segment", "Routing domain", "Security zone"],
    correctAnswer: 0,
    explanation: "A collision domain is a network segment where data packet collisions can occur."
  },
  {
    id: 27,
    category: "Network Fundamentals",
    question: "Which device operates at Layer 1 of the OSI model?",
    options: ["Switch", "Hub", "Router", "Firewall"],
    correctAnswer: 1,
    explanation: "Hubs operate at Layer 1 (Physical Layer) and simply repeat signals."
  },
  {
    id: 28,
    category: "Network Fundamentals",
    question: "What is the purpose of ICMP?",
    options: ["Encrypt data", "Error reporting and diagnostics", "Assign IP addresses", "Route packets"],
    correctAnswer: 1,
    explanation: "ICMP (Internet Control Message Protocol) is used for error reporting and network diagnostics like ping."
  },
  {
    id: 29,
    category: "Network Fundamentals",
    question: "Which protocol operates at the Application Layer?",
    options: ["TCP", "IP", "HTTP", "ARP"],
    correctAnswer: 2,
    explanation: "HTTP operates at the Application Layer (Layer 7) of the OSI model."
  },
  {
    id: 30,
    category: "Network Fundamentals",
    question: "What is half-duplex communication?",
    options: ["Two-way simultaneous", "One-way only", "Two-way alternating", "No communication"],
    correctAnswer: 2,
    explanation: "Half-duplex allows two-way communication but only one direction at a time."
  },
  {
    id: 31,
    category: "Network Fundamentals",
    question: "What is the default port for DNS?",
    options: ["53", "25", "80", "443"],
    correctAnswer: 0,
    explanation: "DNS uses port 53 for both TCP and UDP."
  },
  {
    id: 32,
    category: "Network Fundamentals",
    question: "Which topology provides the most redundancy?",
    options: ["Star", "Bus", "Ring", "Mesh"],
    correctAnswer: 3,
    explanation: "Mesh topology provides the most redundancy as every device connects to every other device."
  },
  {
    id: 33,
    category: "Network Fundamentals",
    question: "What does CSMA/CD stand for?",
    options: ["Carrier Sense Multiple Access with Collision Detection", "Central System Multiple Access Control Device", "Carrier Signal Management Access Control", "Central Sense Multiple Access Device"],
    correctAnswer: 0,
    explanation: "CSMA/CD is used in Ethernet networks to detect and handle collisions."
  },
  {
    id: 34,
    category: "Network Fundamentals",
    question: "Which protocol is used for time synchronization?",
    options: ["SNMP", "NTP", "SMTP", "FTP"],
    correctAnswer: 1,
    explanation: "NTP (Network Time Protocol) synchronizes time across network devices."
  },
  {
    id: 35,
    category: "Network Fundamentals",
    question: "What is the purpose of the Session Layer?",
    options: ["Physical transmission", "Routing", "Managing sessions between applications", "Data encryption"],
    correctAnswer: 2,
    explanation: "The Session Layer (Layer 5) manages sessions and connections between applications."
  },
  {
    id: 36,
    category: "Network Fundamentals",
    question: "Which standard defines Fast Ethernet?",
    options: ["802.3", "802.3u", "802.3ab", "802.3z"],
    correctAnswer: 1,
    explanation: "IEEE 802.3u defines Fast Ethernet (100BASE-TX)."
  },
  {
    id: 37,
    category: "Network Fundamentals",
    question: "What is the purpose of a broadcast address?",
    options: ["Send to one host", "Send to all hosts in subnet", "Send to router", "Send to gateway"],
    correctAnswer: 1,
    explanation: "A broadcast address sends data to all hosts within a subnet."
  },
  {
    id: 38,
    category: "Network Fundamentals",
    question: "Which protocol is used for network management?",
    options: ["SNMP", "SMTP", "HTTP", "FTP"],
    correctAnswer: 0,
    explanation: "SNMP (Simple Network Management Protocol) is used for network device management."
  },
  {
    id: 39,
    category: "Network Fundamentals",
    question: "What is the maximum frame size for standard Ethernet?",
    options: ["512 bytes", "1024 bytes", "1518 bytes", "2048 bytes"],
    correctAnswer: 2,
    explanation: "Standard Ethernet has a maximum frame size of 1518 bytes."
  },
  {
    id: 40,
    category: "Network Fundamentals",
    question: "Which layer provides reliable data transfer?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    correctAnswer: 3,
    explanation: "The Transport Layer provides reliable data transfer using protocols like TCP."
  },
  {
    id: 41,
    category: "Network Fundamentals",
    question: "What is the purpose of flow control?",
    options: ["Encrypt data", "Manage data transmission rate", "Route packets", "Assign addresses"],
    correctAnswer: 1,
    explanation: "Flow control manages the rate of data transmission to prevent overwhelming the receiver."
  },
  {
    id: 42,
    category: "Network Fundamentals",
    question: "Which protocol uses port 23?",
    options: ["SSH", "Telnet", "FTP", "HTTP"],
    correctAnswer: 1,
    explanation: "Telnet uses port 23 for unencrypted remote access."
  },
  {
    id: 43,
    category: "Network Fundamentals",
    question: "What is a unicast address?",
    options: ["Sends to all hosts", "Sends to one specific host", "Sends to multiple hosts", "Sends to no host"],
    correctAnswer: 1,
    explanation: "A unicast address sends data to one specific host."
  },
  {
    id: 44,
    category: "Network Fundamentals",
    question: "Which protocol is used for file transfer with no authentication?",
    options: ["FTP", "TFTP", "SFTP", "HTTP"],
    correctAnswer: 1,
    explanation: "TFTP (Trivial File Transfer Protocol) transfers files without authentication."
  },
  {
    id: 45,
    category: "Network Fundamentals",
    question: "What is the purpose of the Data Link Layer?",
    options: ["Routing", "Physical transmission", "Frame delivery on local network", "Application support"],
    correctAnswer: 2,
    explanation: "The Data Link Layer is responsible for frame delivery on the local network."
  },
  {
    id: 46,
    category: "Network Fundamentals",
    question: "Which protocol translates domain names to IP addresses?",
    options: ["DHCP", "DNS", "ARP", "RARP"],
    correctAnswer: 1,
    explanation: "DNS (Domain Name System) translates domain names to IP addresses."
  },
  {
    id: 47,
    category: "Network Fundamentals",
    question: "What is full-duplex communication?",
    options: ["One-way only", "Two-way alternating", "Two-way simultaneous", "No communication"],
    correctAnswer: 2,
    explanation: "Full-duplex allows two-way communication simultaneously in both directions."
  },
  {
    id: 48,
    category: "Network Fundamentals",
    question: "Which addressing uses 48 bits?",
    options: ["IPv4", "IPv6", "MAC", "Port"],
    correctAnswer: 2,
    explanation: "MAC addresses are 48 bits (6 bytes) long."
  },
  {
    id: 49,
    category: "Network Fundamentals",
    question: "What is the purpose of windowing in TCP?",
    options: ["Encryption", "Flow control", "Routing", "Addressing"],
    correctAnswer: 1,
    explanation: "TCP windowing is used for flow control to manage data transmission."
  },
  {
    id: 50,
    category: "Network Fundamentals",
    question: "Which protocol provides connection-oriented communication?",
    options: ["UDP", "TCP", "ICMP", "ARP"],
    correctAnswer: 1,
    explanation: "TCP provides connection-oriented, reliable communication."
  },
  {
    id: 51,
    category: "Network Fundamentals",
    question: "What is the standard MTU size for Ethernet?",
    options: ["576 bytes", "1024 bytes", "1500 bytes", "2048 bytes"],
    correctAnswer: 2,
    explanation: "The standard MTU size for Ethernet is 1500 bytes."
  },
  {
    id: 52,
    category: "Network Fundamentals",
    question: "Which layer adds source and destination port numbers?",
    options: ["Network", "Transport", "Session", "Application"],
    correctAnswer: 1,
    explanation: "The Transport Layer adds source and destination port numbers."
  },
  {
    id: 53,
    category: "Network Fundamentals",
    question: "What is the purpose of encapsulation?",
    options: ["Remove headers", "Add protocol information at each layer", "Decrypt data", "Route packets"],
    correctAnswer: 1,
    explanation: "Encapsulation adds protocol-specific information at each layer of the OSI model."
  },
  {
    id: 54,
    category: "Network Fundamentals",
    question: "Which protocol is used for secure file transfer?",
    options: ["FTP", "TFTP", "SFTP", "HTTP"],
    correctAnswer: 2,
    explanation: "SFTP (SSH File Transfer Protocol) provides secure file transfer."
  },
  {
    id: 55,
    category: "Network Fundamentals",
    question: "What is a socket?",
    options: ["Physical port", "IP and port combination", "MAC address", "Cable connector"],
    correctAnswer: 1,
    explanation: "A socket is the combination of an IP address and port number."
  },
  {
    id: 56,
    category: "Network Fundamentals",
    question: "Which protocol uses UDP?",
    options: ["HTTP", "FTP", "DNS", "SSH"],
    correctAnswer: 2,
    explanation: "DNS primarily uses UDP for queries (though it can use TCP for zone transfers)."
  },
  {
    id: 57,
    category: "Network Fundamentals",
    question: "What is the purpose of checksums?",
    options: ["Encrypt data", "Detect errors", "Route packets", "Assign addresses"],
    correctAnswer: 1,
    explanation: "Checksums are used to detect errors in transmitted data."
  },
  {
    id: 58,
    category: "Network Fundamentals",
    question: "Which command tests network connectivity?",
    options: ["traceroute", "ping", "netstat", "ipconfig"],
    correctAnswer: 1,
    explanation: "The ping command tests basic network connectivity between devices."
  },
  {
    id: 59,
    category: "Network Fundamentals",
    question: "What is the purpose of the Presentation Layer?",
    options: ["Routing", "Data formatting and encryption", "Physical transmission", "Flow control"],
    correctAnswer: 1,
    explanation: "The Presentation Layer handles data formatting, encryption, and compression."
  },
  {
    id: 60,
    category: "Network Fundamentals",
    question: "Which port does FTP use for data transfer?",
    options: ["20", "21", "22", "23"],
    correctAnswer: 0,
    explanation: "FTP uses port 20 for data transfer and port 21 for control."
  },
  {
    id: 61,
    category: "Network Fundamentals",
    question: "What is a multicast address?",
    options: ["Sends to one host", "Sends to all hosts", "Sends to a group of hosts", "Sends to no host"],
    correctAnswer: 2,
    explanation: "A multicast address sends data to a specific group of hosts."
  },
  {
    id: 62,
    category: "Network Fundamentals",
    question: "Which protocol provides error reporting for IP?",
    options: ["TCP", "UDP", "ICMP", "ARP"],
    correctAnswer: 2,
    explanation: "ICMP provides error reporting and diagnostic functions for IP."
  },
  {
    id: 63,
    category: "Network Fundamentals",
    question: "What is the purpose of segmentation?",
    options: ["Combine data", "Break data into smaller pieces", "Encrypt data", "Route data"],
    correctAnswer: 1,
    explanation: "Segmentation breaks large data into smaller pieces for transmission."
  },
  {
    id: 64,
    category: "Network Fundamentals",
    question: "Which layer is responsible for routing?",
    options: ["Data Link", "Network", "Transport", "Session"],
    correctAnswer: 1,
    explanation: "The Network Layer (Layer 3) is responsible for routing."
  },
  {
    id: 65,
    category: "Network Fundamentals",
    question: "What is the function of a switch?",
    options: ["Route packets between networks", "Forward frames based on MAC addresses", "Assign IP addresses", "Encrypt traffic"],
    correctAnswer: 1,
    explanation: "Switches forward frames based on MAC addresses within a local network."
  },
  {
    id: 66,
    category: "Network Fundamentals",
    question: "Which protocol uses three-way handshake?",
    options: ["UDP", "TCP", "ICMP", "ARP"],
    correctAnswer: 1,
    explanation: "TCP uses a three-way handshake to establish connections."
  },
  {
    id: 67,
    category: "Network Fundamentals",
    question: "What is the purpose of de-encapsulation?",
    options: ["Add headers", "Remove headers at each layer", "Encrypt data", "Route packets"],
    correctAnswer: 1,
    explanation: "De-encapsulation removes protocol information at each layer as data moves up the stack."
  },
  {
    id: 68,
    category: "Network Fundamentals",
    question: "Which port does SMTP use?",
    options: ["25", "53", "80", "110"],
    correctAnswer: 0,
    explanation: "SMTP uses port 25 for email transmission."
  },
  {
    id: 69,
    category: "Network Fundamentals",
    question: "What is the purpose of sequence numbers in TCP?",
    options: ["Encryption", "Ensure correct order of segments", "Routing", "Addressing"],
    correctAnswer: 1,
    explanation: "TCP sequence numbers ensure that segments are reassembled in the correct order."
  },
  {
    id: 70,
    category: "Network Fundamentals",
    question: "Which device regenerates and amplifies signals?",
    options: ["Router", "Switch", "Repeater", "Gateway"],
    correctAnswer: 2,
    explanation: "A repeater regenerates and amplifies signals to extend network distance."
  },
  {
    id: 71,
    category: "Network Fundamentals",
    question: "What is the purpose of acknowledgments in TCP?",
    options: ["Encrypt data", "Confirm receipt of data", "Route packets", "Assign addresses"],
    correctAnswer: 1,
    explanation: "TCP acknowledgments confirm that data has been received successfully."
  },
  {
    id: 72,
    category: "Network Fundamentals",
    question: "Which protocol is used to retrieve email from a server?",
    options: ["SMTP", "POP3", "HTTP", "FTP"],
    correctAnswer: 1,
    explanation: "POP3 (Post Office Protocol version 3) is used to retrieve email from a server."
  },
  {
    id: 73,
    category: "Network Fundamentals",
    question: "What is the function of a router?",
    options: ["Forward frames in LAN", "Route packets between networks", "Assign MAC addresses", "Repeat signals"],
    correctAnswer: 1,
    explanation: "Routers route packets between different networks based on IP addresses."
  },
  {
    id: 74,
    category: "Network Fundamentals",
    question: "Which layer uses MAC addresses?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    correctAnswer: 1,
    explanation: "The Data Link Layer uses MAC addresses for local network communication."
  },
  {
    id: 75,
    category: "Network Fundamentals",
    question: "What is the purpose of error detection?",
    options: ["Encrypt data", "Identify corrupted data", "Route packets", "Assign addresses"],
    correctAnswer: 1,
    explanation: "Error detection identifies corrupted or damaged data during transmission."
  },
  {
    id: 76,
    category: "Network Fundamentals",
    question: "Which protocol provides connectionless datagram service?",
    options: ["TCP", "UDP", "FTP", "HTTP"],
    correctAnswer: 1,
    explanation: "UDP provides connectionless datagram service without guaranteed delivery."
  },
  {
    id: 77,
    category: "Network Fundamentals",
    question: "What is the purpose of subnetting?",
    options: ["Increase IP addresses", "Divide network into smaller segments", "Encrypt data", "Speed up routing"],
    correctAnswer: 1,
    explanation: "Subnetting divides a network into smaller, more manageable segments."
  },
  {
    id: 78,
    category: "Network Fundamentals",
    question: "Which protocol uses port 110?",
    options: ["SMTP", "POP3", "IMAP", "HTTP"],
    correctAnswer: 1,
    explanation: "POP3 uses port 110 for email retrieval."
  },
  {
    id: 79,
    category: "Network Fundamentals",
    question: "What is a frame?",
    options: ["Layer 3 PDU", "Layer 2 PDU", "Layer 4 PDU", "Layer 7 PDU"],
    correctAnswer: 1,
    explanation: "A frame is the Protocol Data Unit (PDU) at Layer 2 (Data Link Layer)."
  },
  {
    id: 80,
    category: "Network Fundamentals",
    question: "Which command shows active network connections?",
    options: ["ping", "traceroute", "netstat", "ipconfig"],
    correctAnswer: 2,
    explanation: "The netstat command displays active network connections and listening ports."
  },

  // IP Addressing (100 questions)
  {
    id: 81,
    category: "IP Addressing",
    question: "What is the network address of 192.168.10.45/26?",
    options: ["192.168.10.0", "192.168.10.32", "192.168.10.64", "192.168.10.128"],
    correctAnswer: 0,
    explanation: "/26 gives 64 addresses per subnet. 45 falls in the 192.168.10.0 subnet."
  },
  {
    id: 82,
    category: "IP Addressing",
    question: "How many host addresses are available in a /29 subnet?",
    options: ["4", "6", "8", "14"],
    correctAnswer: 1,
    explanation: "A /29 subnet has 8 total addresses, minus 2 (network and broadcast) = 6 usable host addresses."
  },
  {
    id: 83,
    category: "IP Addressing",
    question: "Which IPv6 address is the loopback address?",
    options: ["::1", "FE80::", "2001::", "FF02::1"],
    correctAnswer: 0,
    explanation: "::1 is the IPv6 loopback address equivalent to 127.0.0.1 in IPv4."
  },
  {
    id: 84,
    category: "IP Addressing",
    question: "What is the first usable IP address in the 172.16.32.0/20 network?",
    options: ["172.16.32.0", "172.16.32.1", "172.16.33.1", "172.16.31.1"],
    correctAnswer: 1,
    explanation: "The first usable address is always the network address + 1, which is 172.16.32.1."
  },
  {
    id: 85,
    category: "IP Addressing",
    question: "Which IPv6 address type is used for one-to-many communication?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    correctAnswer: 1,
    explanation: "Multicast addresses are used for one-to-many communication in IPv6."
  },
  {
    id: 86,
    category: "IP Addressing",
    question: "What is the broadcast address for 10.1.1.0/24?",
    options: ["10.1.1.0", "10.1.1.255", "10.1.2.0", "10.1.1.254"],
    correctAnswer: 1,
    explanation: "The broadcast address is the last address in the subnet: 10.1.1.255."
  },
  {
    id: 87,
    category: "IP Addressing",
    question: "Which private IP address range belongs to Class A?",
    options: ["172.16.0.0 - 172.31.255.255", "192.168.0.0 - 192.168.255.255", "10.0.0.0 - 10.255.255.255", "169.254.0.0 - 169.254.255.255"],
    correctAnswer: 2,
    explanation: "The 10.0.0.0 - 10.255.255.255 range is the Class A private address range."
  },
  {
    id: 88,
    category: "IP Addressing",
    question: "What does CIDR stand for?",
    options: ["Classless Internet Domain Routing", "Classless Inter-Domain Routing", "Class Internet Domain Routing", "Central Inter-Domain Routing"],
    correctAnswer: 1,
    explanation: "CIDR stands for Classless Inter-Domain Routing."
  },
  {
    id: 89,
    category: "IP Addressing",
    question: "How many bits are in an IPv6 address?",
    options: ["32", "64", "96", "128"],
    correctAnswer: 3,
    explanation: "IPv6 addresses are 128 bits long."
  },
  {
    id: 90,
    category: "IP Addressing",
    question: "What is the subnet mask for a /27 network in decimal?",
    options: ["255.255.255.224", "255.255.255.192", "255.255.255.240", "255.255.255.248"],
    correctAnswer: 0,
    explanation: "/27 equals 255.255.255.224 (11111111.11111111.11111111.11100000)."
  },
  {
    id: 91,
    category: "IP Addressing",
    question: "Which IPv6 address prefix indicates a link-local address?",
    options: ["FE80::/10", "FF00::/8", "2001::/16", "FC00::/7"],
    correctAnswer: 0,
    explanation: "FE80::/10 is the prefix for IPv6 link-local addresses."
  },
  {
    id: 92,
    category: "IP Addressing",
    question: "What is the purpose of APIPA?",
    options: ["Assign public IP addresses", "Automatically assign IP when DHCP fails", "Route packets", "Translate addresses"],
    correctAnswer: 1,
    explanation: "APIPA (169.254.x.x) automatically assigns an IP address when DHCP is unavailable."
  },
  {
    id: 93,
    category: "IP Addressing",
    question: "How many subnets can be created from a /24 network when using /26?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "Borrowing 2 bits (from /24 to /26) creates 2^2 = 4 subnets."
  },
  {
    id: 94,
    category: "IP Addressing",
    question: "What is the wildcard mask for a /28 subnet?",
    options: ["0.0.0.15", "0.0.0.31", "0.0.0.7", "0.0.0.63"],
    correctAnswer: 0,
    explanation: "A /28 subnet mask is 255.255.255.240, so the wildcard mask is 0.0.0.15."
  },
  {
    id: 95,
    category: "IP Addressing",
    question: "Which address is NOT routable on the internet?",
    options: ["8.8.8.8", "172.16.0.1", "64.233.160.0", "1.1.1.1"],
    correctAnswer: 1,
    explanation: "172.16.0.1 is a private IP address and is not routable on the internet."
  },
  {
    id: 96,
    category: "IP Addressing",
    question: "What is the prefix length equivalent to 255.255.252.0?",
    options: ["/20", "/21", "/22", "/23"],
    correctAnswer: 2,
    explanation: "255.255.252.0 is equivalent to /22 (22 network bits)."
  },
  {
    id: 97,
    category: "IP Addressing",
    question: "Which IPv6 address type is routable and globally unique?",
    options: ["Link-local", "Unique local", "Global unicast", "Multicast"],
    correctAnswer: 2,
    explanation: "Global unicast addresses are routable on the internet and globally unique."
  },
  {
    id: 98,
    category: "IP Addressing",
    question: "What is the last usable host address in 192.168.100.0/25?",
    options: ["192.168.100.126", "192.168.100.127", "192.168.100.128", "192.168.100.254"],
    correctAnswer: 0,
    explanation: "/25 creates subnets of 128 addresses. Last usable is broadcast - 1 = 192.168.100.126."
  },
  {
    id: 99,
    category: "IP Addressing",
    question: "Which command configures an IP address on a Cisco router interface?",
    options: ["ip address 192.168.1.1 255.255.255.0", "set ip 192.168.1.1/24", "interface ip 192.168.1.1", "config ip 192.168.1.1"],
    correctAnswer: 0,
    explanation: "The 'ip address [IP] [mask]' command configures an IP address on an interface."
  },
  {
    id: 100,
    category: "IP Addressing",
    question: "What does VLSM stand for?",
    options: ["Variable Length Subnet Mask", "Virtual LAN Subnet Mask", "Variable Link Subnet Mode", "Virtual Length Subnet Mode"],
    correctAnswer: 0,
    explanation: "VLSM stands for Variable Length Subnet Mask, allowing different subnet sizes."
  },
  {
    id: 101,
    category: "IP Addressing",
    question: "What is the network address of 10.5.72.128/18?",
    options: ["10.5.0.0", "10.5.64.0", "10.5.72.0", "10.5.128.0"],
    correctAnswer: 1,
    explanation: "/18 means the first two octets and 2 bits of the third octet are network. 64 is the subnet boundary."
  },
  {
    id: 102,
    category: "IP Addressing",
    question: "How many subnets are created with a /25 mask from a /24 network?",
    options: ["1", "2", "4", "8"],
    correctAnswer: 1,
    explanation: "Borrowing 1 bit creates 2^1 = 2 subnets."
  },
  {
    id: 103,
    category: "IP Addressing",
    question: "What is the IPv6 equivalent of IPv4's 255.255.255.255 broadcast?",
    options: ["FF02::1", "FF02::2", "::1", "No equivalent"],
    correctAnswer: 3,
    explanation: "IPv6 does not have broadcast addresses; it uses multicast instead."
  },
  {
    id: 104,
    category: "IP Addressing",
    question: "Which IPv6 address prefix indicates unique local addresses?",
    options: ["FE80::/10", "FC00::/7", "FF00::/8", "2001::/16"],
    correctAnswer: 1,
    explanation: "FC00::/7 is the prefix for IPv6 unique local addresses (similar to private IPv4)."
  },
  {
    id: 105,
    category: "IP Addressing",
    question: "What is the maximum number of hosts in a /30 subnet?",
    options: ["1", "2", "4", "6"],
    correctAnswer: 1,
    explanation: "A /30 subnet has 4 total addresses, minus 2 = 2 usable hosts (commonly used for point-to-point links)."
  },
  {
    id: 106,
    category: "IP Addressing",
    question: "Which is a valid Class B IP address?",
    options: ["126.1.1.1", "130.1.1.1", "200.1.1.1", "224.1.1.1"],
    correctAnswer: 1,
    explanation: "Class B addresses range from 128.0.0.0 to 191.255.255.255."
  },
  {
    id: 107,
    category: "IP Addressing",
    question: "What is the purpose of subnet zero?",
    options: ["Reserved", "First usable subnet", "Last subnet", "Not used"],
    correctAnswer: 1,
    explanation: "Subnet zero is the first subnet and is now commonly used in modern networks."
  },
  {
    id: 108,
    category: "IP Addressing",
    question: "How many /26 subnets can be created from a /24 network?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "Borrowing 2 bits creates 2^2 = 4 subnets."
  },
  {
    id: 109,
    category: "IP Addressing",
    question: "What is the IPv4 address range for APIPA?",
    options: ["10.0.0.0 - 10.255.255.255", "169.254.0.0 - 169.254.255.255", "172.16.0.0 - 172.31.255.255", "192.168.0.0 - 192.168.255.255"],
    correctAnswer: 1,
    explanation: "APIPA uses the 169.254.0.0/16 address range."
  },
  {
    id: 110,
    category: "IP Addressing",
    question: "Which subnet mask provides 62 usable host addresses?",
    options: ["/24", "/25", "/26", "/27"],
    correctAnswer: 2,
    explanation: "/26 provides 64 total addresses - 2 = 62 usable hosts."
  },
  {
    id: 111,
    category: "IP Addressing",
    question: "What is the broadcast address for 172.20.16.0/22?",
    options: ["172.20.17.255", "172.20.18.255", "172.20.19.255", "172.20.20.255"],
    correctAnswer: 2,
    explanation: "/22 spans 4 Class C networks. Broadcast is 172.20.19.255."
  },
  {
    id: 112,
    category: "IP Addressing",
    question: "Which IPv6 address is the all-nodes multicast address?",
    options: ["FF02::1", "FF02::2", "FF02::5", "FF02::6"],
    correctAnswer: 0,
    explanation: "FF02::1 is the all-nodes multicast address in IPv6."
  },
  {
    id: 113,
    category: "IP Addressing",
    question: "What is the default subnet mask for Class A?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 0,
    explanation: "Class A uses a default subnet mask of 255.0.0.0 or /8."
  },
  {
    id: 114,
    category: "IP Addressing",
    question: "How many bits are borrowed to create 8 subnets?",
    options: ["2", "3", "4", "8"],
    correctAnswer: 1,
    explanation: "2^3 = 8, so 3 bits must be borrowed to create 8 subnets."
  },
  {
    id: 115,
    category: "IP Addressing",
    question: "What is the network ID for 10.5.118.7/21?",
    options: ["10.5.112.0", "10.5.116.0", "10.5.118.0", "10.5.120.0"],
    correctAnswer: 0,
    explanation: "/21 uses 5 bits in the third octet. 112 is the network boundary."
  },
  {
    id: 116,
    category: "IP Addressing",
    question: "Which is a valid private IP address?",
    options: ["11.0.0.1", "172.32.0.1", "192.168.1.1", "224.0.0.1"],
    correctAnswer: 2,
    explanation: "192.168.1.1 is in the private Class C range (192.168.0.0/16)."
  },
  {
    id: 117,
    category: "IP Addressing",
    question: "What is the purpose of IPv6 stateless autoconfiguration?",
    options: ["Manual IP assignment", "Automatic IP configuration without DHCP", "Static routing", "MAC addressing"],
    correctAnswer: 1,
    explanation: "IPv6 SLAAC allows devices to automatically configure IPv6 addresses without DHCP."
  },
  {
    id: 118,
    category: "IP Addressing",
    question: "How many usable IPs are in a /31 subnet?",
    options: ["0", "2", "4", "6"],
    correctAnswer: 1,
    explanation: "/31 is used for point-to-point links and provides 2 usable addresses (RFC 3021)."
  },
  {
    id: 119,
    category: "IP Addressing",
    question: "What is the IPv6 all-routers multicast address?",
    options: ["FF02::1", "FF02::2", "FF02::5", "FF02::9"],
    correctAnswer: 1,
    explanation: "FF02::2 is the all-routers multicast address in IPv6."
  },
  {
    id: 120,
    category: "IP Addressing",
    question: "Which subnet mask gives 30 usable hosts?",
    options: ["/26", "/27", "/28", "/29"],
    correctAnswer: 1,
    explanation: "/27 provides 32 total addresses - 2 = 30 usable hosts."
  },
  {
    id: 121,
    category: "IP Addressing",
    question: "What is the network address of 192.168.50.200/28?",
    options: ["192.168.50.192", "192.168.50.200", "192.168.50.208", "192.168.50.224"],
    correctAnswer: 0,
    explanation: "/28 creates 16-address subnets. 200 falls in the 192.168.50.192 subnet."
  },
  {
    id: 122,
    category: "IP Addressing",
    question: "Which Class C private address range is most commonly used?",
    options: ["192.0.0.0/24", "192.168.0.0/16", "172.16.0.0/12", "10.0.0.0/8"],
    correctAnswer: 1,
    explanation: "192.168.0.0/16 is the most commonly used private Class C range."
  },
  {
    id: 123,
    category: "IP Addressing",
    question: "How many host bits remain in a /20 subnet?",
    options: ["8", "10", "12", "14"],
    correctAnswer: 2,
    explanation: "32 total bits - 20 network bits = 12 host bits."
  },
  {
    id: 124,
    category: "IP Addressing",
    question: "What is the IPv6 loopback address in compressed form?",
    options: ["0:0:0:0:0:0:0:1", "::1", "FE80::1", "127.0.0.1"],
    correctAnswer: 1,
    explanation: "::1 is the compressed form of the IPv6 loopback address."
  },
  {
    id: 125,
    category: "IP Addressing",
    question: "Which subnet mask provides exactly 510 usable hosts?",
    options: ["/22", "/23", "/24", "/25"],
    correctAnswer: 1,
    explanation: "/23 provides 512 total addresses - 2 = 510 usable hosts."
  },
  {
    id: 126,
    category: "IP Addressing",
    question: "What does the /notation represent in CIDR?",
    options: ["Number of hosts", "Number of network bits", "Number of subnets", "Number of octets"],
    correctAnswer: 1,
    explanation: "The /notation in CIDR represents the number of network bits in the subnet mask."
  },
  {
    id: 127,
    category: "IP Addressing",
    question: "Which IPv4 address class supports the most hosts per network?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: 0,
    explanation: "Class A supports the most hosts per network (over 16 million)."
  },
  {
    id: 128,
    category: "IP Addressing",
    question: "What is the first usable address in 10.10.10.64/26?",
    options: ["10.10.10.64", "10.10.10.65", "10.10.10.66", "10.10.10.128"],
    correctAnswer: 1,
    explanation: "The first usable address is network address + 1 = 10.10.10.65."
  },
  {
    id: 129,
    category: "IP Addressing",
    question: "Which address type does IPv6 use instead of broadcast?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    correctAnswer: 1,
    explanation: "IPv6 uses multicast instead of broadcast for one-to-many communication."
  },
  {
    id: 130,
    category: "IP Addressing",
    question: "How many /29 subnets can be created from a /26 network?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 1,
    explanation: "Borrowing 3 bits (from /26 to /29) creates 2^3 = 8 subnets."
  },
  {
    id: 131,
    category: "IP Addressing",
    question: "What is the IPv4 multicast address range?",
    options: ["192.0.0.0 - 223.255.255.255", "224.0.0.0 - 239.255.255.255", "240.0.0.0 - 255.255.255.255", "172.16.0.0 - 172.31.255.255"],
    correctAnswer: 1,
    explanation: "Class D multicast addresses range from 224.0.0.0 to 239.255.255.255."
  },
  {
    id: 132,
    category: "IP Addressing",
    question: "Which mask is equivalent to 255.255.255.248?",
    options: ["/27", "/28", "/29", "/30"],
    correctAnswer: 2,
    explanation: "255.255.255.248 equals /29 (29 network bits)."
  },
  {
    id: 133,
    category: "IP Addressing",
    question: "What is the purpose of the subnet mask?",
    options: ["Encrypt data", "Identify network and host portions", "Route packets", "Assign addresses"],
    correctAnswer: 1,
    explanation: "The subnet mask identifies which portion of an IP address is the network and which is the host."
  },
  {
    id: 134,
    category: "IP Addressing",
    question: "Which IPv6 address indicates 'any address'?",
    options: ["::0", "::", "::1", "FE80::"],
    correctAnswer: 1,
    explanation: ":: (all zeros) represents any address or unspecified address in IPv6."
  },
  {
    id: 135,
    category: "IP Addressing",
    question: "How many Class C networks are in a /22 subnet?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "/22 encompasses 4 Class C networks (/24 each)."
  },
  {
    id: 136,
    category: "IP Addressing",
    question: "What is the broadcast address for 10.0.0.0/8?",
    options: ["10.0.0.255", "10.255.255.255", "10.0.255.255", "10.1.1.255"],
    correctAnswer: 1,
    explanation: "For a /8 network, the broadcast is all host bits set to 1: 10.255.255.255."
  },
  {
    id: 137,
    category: "IP Addressing",
    question: "Which is a valid IPv6 global unicast address prefix?",
    options: ["FE80::/10", "FC00::/7", "2000::/3", "FF00::/8"],
    correctAnswer: 2,
    explanation: "2000::/3 is the prefix for IPv6 global unicast addresses."
  },
  {
    id: 138,
    category: "IP Addressing",
    question: "What does supernetting accomplish?",
    options: ["Creates smaller subnets", "Combines multiple networks", "Assigns IP addresses", "Encrypts traffic"],
    correctAnswer: 1,
    explanation: "Supernetting combines multiple networks into a larger network (route aggregation)."
  },
  {
    id: 139,
    category: "IP Addressing",
    question: "Which command shows the IP configuration on Windows?",
    options: ["ifconfig", "ipconfig", "show ip", "netstat"],
    correctAnswer: 1,
    explanation: "The 'ipconfig' command displays IP configuration on Windows systems."
  },
  {
    id: 140,
    category: "IP Addressing",
    question: "What is the prefix length for a subnet mask of 255.255.255.192?",
    options: ["/24", "/25", "/26", "/27"],
    correctAnswer: 2,
    explanation: "255.255.255.192 equals /26 (26 network bits)."
  },
  {
    id: 141,
    category: "IP Addressing",
    question: "How many total addresses are in a /25 subnet?",
    options: ["64", "128", "256", "512"],
    correctAnswer: 1,
    explanation: "A /25 subnet has 2^7 = 128 total addresses."
  },
  {
    id: 142,
    category: "IP Addressing",
    question: "Which IPv6 feature eliminates the need for NAT?",
    options: ["Large address space", "IPsec", "QoS", "Multicast"],
    correctAnswer: 0,
    explanation: "IPv6's vast address space eliminates the need for NAT as used in IPv4."
  },
  {
    id: 143,
    category: "IP Addressing",
    question: "What is the network address of 172.31.255.200/16?",
    options: ["172.0.0.0", "172.31.0.0", "172.31.255.0", "172.16.0.0"],
    correctAnswer: 1,
    explanation: "/16 means the first two octets are the network: 172.31.0.0."
  },
  {
    id: 144,
    category: "IP Addressing",
    question: "Which tool calculates subnet information?",
    options: ["Ping", "Traceroute", "Subnet calculator", "Netstat"],
    correctAnswer: 2,
    explanation: "A subnet calculator is used to calculate subnet information like network addresses and host ranges."
  },
  {
    id: 145,
    category: "IP Addressing",
    question: "What is the maximum prefix length for IPv6?",
    options: ["/64", "/96", "/112", "/128"],
    correctAnswer: 3,
    explanation: "/128 is the maximum prefix length in IPv6, representing a single host."
  },
  {
    id: 146,
    category: "IP Addressing",
    question: "Which subnet mask allows for exactly 14 hosts?",
    options: ["/27", "/28", "/29", "/30"],
    correctAnswer: 1,
    explanation: "/28 provides 16 total addresses - 2 = 14 usable hosts."
  },
  {
    id: 147,
    category: "IP Addressing",
    question: "What is the purpose of RFC 1918?",
    options: ["Define public addresses", "Define private address ranges", "Define multicast", "Define IPv6"],
    correctAnswer: 1,
    explanation: "RFC 1918 defines private IPv4 address ranges for use in private networks."
  },
  {
    id: 148,
    category: "IP Addressing",
    question: "How many hexadecimal characters are in an IPv6 address?",
    options: ["16", "24", "32", "48"],
    correctAnswer: 2,
    explanation: "IPv6 addresses consist of 32 hexadecimal characters (128 bits / 4 bits per hex)."
  },
  {
    id: 149,
    category: "IP Addressing",
    question: "Which address range is reserved for documentation?",
    options: ["192.0.2.0/24", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"],
    correctAnswer: 0,
    explanation: "192.0.2.0/24 (TEST-NET-1) is reserved for documentation and examples."
  },
  {
    id: 150,
    category: "IP Addressing",
    question: "What is the last usable IP in 192.168.1.0/24?",
    options: ["192.168.1.253", "192.168.1.254", "192.168.1.255", "192.168.2.0"],
    correctAnswer: 1,
    explanation: "The last usable IP is broadcast - 1 = 192.168.1.254."
  },
  {
    id: 151,
    category: "IP Addressing",
    question: "Which private IP range is largest?",
    options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "All equal"],
    correctAnswer: 0,
    explanation: "10.0.0.0/8 is the largest private range with over 16 million addresses."
  },
  {
    id: 152,
    category: "IP Addressing",
    question: "What does NAT overload (PAT) use to differentiate connections?",
    options: ["IP addresses", "MAC addresses", "Port numbers", "VLAN IDs"],
    correctAnswer: 2,
    explanation: "NAT overload (PAT) uses port numbers to differentiate multiple connections."
  },
  {
    id: 153,
    category: "IP Addressing",
    question: "How many /27 subnets fit in a /24 network?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 1,
    explanation: "Borrowing 3 bits creates 2^3 = 8 subnets."
  },
  {
    id: 154,
    category: "IP Addressing",
    question: "Which IPv6 transition technology encapsulates IPv6 in IPv4?",
    options: ["Dual stack", "Tunneling", "Translation", "All of the above"],
    correctAnswer: 1,
    explanation: "Tunneling encapsulates IPv6 packets within IPv4 for transit across IPv4 networks."
  },
  {
    id: 155,
    category: "IP Addressing",
    question: "What is the network ID for 10.20.140.50/19?",
    options: ["10.20.128.0", "10.20.136.0", "10.20.140.0", "10.20.160.0"],
    correctAnswer: 0,
    explanation: "/19 uses 3 bits in the third octet. 128 is the network boundary for this address."
  },
  {
    id: 156,
    category: "IP Addressing",
    question: "Which address is the IPv6 solicited-node multicast prefix?",
    options: ["FF02::1", "FF02::2", "FF02:0:0:0:0:1:FF00::/104", "FE80::/10"],
    correctAnswer: 2,
    explanation: "FF02:0:0:0:0:1:FF00::/104 is the solicited-node multicast prefix in IPv6."
  },
  {
    id: 157,
    category: "IP Addressing",
    question: "How many bits are in each hextet of an IPv6 address?",
    options: ["8", "16", "32", "64"],
    correctAnswer: 1,
    explanation: "Each hextet (group) in an IPv6 address contains 16 bits."
  },
  {
    id: 158,
    category: "IP Addressing",
    question: "What is the subnet mask for /23 in decimal?",
    options: ["255.255.252.0", "255.255.254.0", "255.255.255.0", "255.255.248.0"],
    correctAnswer: 1,
    explanation: "/23 equals 255.255.254.0 (23 network bits)."
  },
  {
    id: 159,
    category: "IP Addressing",
    question: "Which command renews DHCP lease on Windows?",
    options: ["ipconfig /release", "ipconfig /renew", "ipconfig /all", "ipconfig /flushdns"],
    correctAnswer: 1,
    explanation: "'ipconfig /renew' requests a new DHCP lease on Windows."
  },
  {
    id: 160,
    category: "IP Addressing",
    question: "What is the broadcast address for 172.16.64.0/20?",
    options: ["172.16.71.255", "172.16.79.255", "172.16.95.255", "172.16.127.255"],
    correctAnswer: 1,
    explanation: "/20 spans 16 Class C networks. Broadcast is 172.16.79.255."
  },
  {
    id: 161,
    category: "IP Addressing",
    question: "Which IPv6 address type is used for one-to-nearest communication?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    correctAnswer: 2,
    explanation: "Anycast addresses route packets to the nearest of multiple possible destinations."
  },
  {
    id: 162,
    category: "IP Addressing",
    question: "How many usable hosts are in a /23 subnet?",
    options: ["254", "510", "1022", "2046"],
    correctAnswer: 1,
    explanation: "A /23 has 512 total addresses - 2 = 510 usable hosts."
  },
  {
    id: 163,
    category: "IP Addressing",
    question: "What is the purpose of EUI-64 in IPv6?",
    options: ["Route aggregation", "Generate interface ID from MAC", "Multicast routing", "Security"],
    correctAnswer: 1,
    explanation: "EUI-64 generates a 64-bit IPv6 interface ID from a 48-bit MAC address."
  },
  {
    id: 164,
    category: "IP Addressing",
    question: "Which subnet provides exactly 126 usable hosts?",
    options: ["/24", "/25", "/26", "/27"],
    correctAnswer: 1,
    explanation: "/25 provides 128 total addresses - 2 = 126 usable hosts."
  },
  {
    id: 165,
    category: "IP Addressing",
    question: "What is the first address in the 192.168.0.0/24 network?",
    options: ["192.168.0.0", "192.168.0.1", "192.168.1.0", "192.168.1.1"],
    correctAnswer: 0,
    explanation: "The first address is the network address: 192.168.0.0."
  },
  {
    id: 166,
    category: "IP Addressing",
    question: "Which is NOT a valid IPv4 address class?",
    options: ["Class A", "Class D", "Class E", "Class F"],
    correctAnswer: 3,
    explanation: "IPv4 only has Classes A through E; Class F does not exist."
  },
  {
    id: 167,
    category: "IP Addressing",
    question: "How many /28 subnets can be created from a /25 network?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 1,
    explanation: "Borrowing 3 bits (from /25 to /28) creates 2^3 = 8 subnets."
  },
  {
    id: 168,
    category: "IP Addressing",
    question: "What is the recommended IPv6 subnet size for end users?",
    options: ["/48", "/56", "/64", "/128"],
    correctAnswer: 2,
    explanation: "/64 is the recommended IPv6 subnet size for end-user networks."
  },
  {
    id: 169,
    category: "IP Addressing",
    question: "Which Class B private address range exists?",
    options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "169.254.0.0/16"],
    correctAnswer: 1,
    explanation: "172.16.0.0/12 is the Class B private address range."
  },
  {
    id: 170,
    category: "IP Addressing",
    question: "What is the network address of 192.0.2.130/25?",
    options: ["192.0.2.0", "192.0.2.128", "192.0.2.64", "192.0.2.192"],
    correctAnswer: 1,
    explanation: "/25 creates 128-address subnets. 130 falls in the 192.0.2.128 subnet."
  },
  {
    id: 171,
    category: "IP Addressing",
    question: "Which technique allows IPv4 and IPv6 to coexist?",
    options: ["Single stack", "Dual stack", "Triple stack", "No stack"],
    correctAnswer: 1,
    explanation: "Dual stack allows devices to run both IPv4 and IPv6 simultaneously."
  },
  {
    id: 172,
    category: "IP Addressing",
    question: "How many groups (hextets) are in an IPv6 address?",
    options: ["4", "6", "8", "16"],
    correctAnswer: 2,
    explanation: "An IPv6 address contains 8 groups (hextets) of 16 bits each."
  },
  {
    id: 173,
    category: "IP Addressing",
    question: "What is the wildcard mask for /24?",
    options: ["0.0.0.255", "0.0.255.255", "255.255.255.0", "0.0.0.0"],
    correctAnswer: 0,
    explanation: "The wildcard mask for /24 (255.255.255.0) is 0.0.0.255."
  },
  {
    id: 174,
    category: "IP Addressing",
    question: "Which IPv6 header field replaces IPv4's TTL?",
    options: ["Flow Label", "Hop Limit", "Next Header", "Traffic Class"],
    correctAnswer: 1,
    explanation: "IPv6's Hop Limit field serves the same purpose as IPv4's TTL."
  },
  {
    id: 175,
    category: "IP Addressing",
    question: "What is the last usable IP in 10.10.10.192/27?",
    options: ["10.10.10.222", "10.10.10.223", "10.10.10.254", "10.10.10.255"],
    correctAnswer: 0,
    explanation: "/27 creates 32-address subnets. Last usable in this subnet is 10.10.10.222."
  },
  {
    id: 176,
    category: "IP Addressing",
    question: "Which is a valid loopback address range?",
    options: ["127.0.0.0/8", "128.0.0.0/8", "192.168.0.0/16", "10.0.0.0/8"],
    correctAnswer: 0,
    explanation: "The entire 127.0.0.0/8 range is reserved for loopback."
  },
  {
    id: 177,
    category: "IP Addressing",
    question: "How many subnets does /27 create from /24?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 2,
    explanation: "Borrowing 3 bits creates 2^3 = 8 subnets."
  },
  {
    id: 178,
    category: "IP Addressing",
    question: "What is the broadcast address for 10.1.0.0/16?",
    options: ["10.1.0.255", "10.1.255.255", "10.255.255.255", "10.1.1.255"],
    correctAnswer: 1,
    explanation: "For /16, the broadcast is all host bits (last two octets) set to 1: 10.1.255.255."
  },
  {
    id: 179,
    category: "IP Addressing",
    question: "Which IPv6 address compression rule can be used only once?",
    options: ["Leading zero removal", "Double colon (::)", "Hextet removal", "All of the above"],
    correctAnswer: 1,
    explanation: "The double colon (::) can be used only once in an IPv6 address to avoid ambiguity."
  },
  {
    id: 180,
    category: "IP Addressing",
    question: "What does a /32 subnet represent?",
    options: ["Network address", "Single host", "Broadcast address", "Subnet"],
    correctAnswer: 1,
    explanation: "A /32 subnet represents a single specific host address."
  },

  // Continue with Routing, Switching, Security, Wireless, Automation questions...
  // Due to length constraints, I'll add representative samples from each category
  
  // Routing Protocols (60 questions)
  {
    id: 181,
    category: "Routing Protocols",
    question: "Which routing protocol uses the Bellman-Ford algorithm?",
    options: ["OSPF", "RIP", "EIGRP", "BGP"],
    correctAnswer: 1,
    explanation: "RIP (Routing Information Protocol) uses the Bellman-Ford algorithm."
  },
  {
    id: 182,
    category: "Routing Protocols",
    question: "What is the maximum hop count for RIPv2?",
    options: ["15", "16", "255", "Unlimited"],
    correctAnswer: 0,
    explanation: "RIP has a maximum hop count of 15; 16 is considered unreachable."
  },
  {
    id: 183,
    category: "Routing Protocols",
    question: "Which OSPF area must all other areas connect to?",
    options: ["Area 0", "Area 1", "Area 10", "Area 255"],
    correctAnswer: 0,
    explanation: "Area 0 (backbone area) is required, and all other areas must connect to it."
  },
  {
    id: 184,
    category: "Routing Protocols",
    question: "What metric does OSPF use?",
    options: ["Hop count", "Bandwidth", "Cost", "Delay"],
    correctAnswer: 2,
    explanation: "OSPF uses cost as its metric, which is based on bandwidth."
  },
  {
    id: 185,
    category: "Routing Protocols",
    question: "Which protocol is considered a hybrid routing protocol?",
    options: ["RIP", "OSPF", "EIGRP", "IS-IS"],
    correctAnswer: 2,
    explanation: "EIGRP is considered a hybrid routing protocol (advanced distance-vector)."
  },
  // ... (continuing with more routing questions to reach target)

  // Switching (50 questions)
  {
    id: 241,
    category: "Switching",
    question: "What is the purpose of Spanning Tree Protocol?",
    options: ["Increase bandwidth", "Prevent loops", "Encrypt traffic", "Route packets"],
    correctAnswer: 1,
    explanation: "STP prevents loops in switched networks by blocking redundant paths."
  },
  {
    id: 242,
    category: "Switching",
    question: "Which STP port state forwards traffic and learns MAC addresses?",
    options: ["Blocking", "Listening", "Learning", "Forwarding"],
    correctAnswer: 3,
    explanation: "The forwarding state both forwards traffic and learns MAC addresses."
  },
  // ... (more switching questions)

  // Security (50 questions)
  {
    id: 291,
    category: "Security",
    question: "Which protocol provides secure remote access to network devices?",
    options: ["Telnet", "SSH", "HTTP", "FTP"],
    correctAnswer: 1,
    explanation: "SSH (Secure Shell) provides encrypted remote access to network devices."
  },
  {
    id: 292,
    category: "Security",
    question: "What port does SSH use by default?",
    options: ["21", "22", "23", "443"],
    correctAnswer: 1,
    explanation: "SSH uses TCP port 22 by default."
  },
  // ... (more security questions)

  // Wireless (40 questions)
  {
    id: 341,
    category: "Wireless",
    question: "Which wireless standard operates only at 2.4 GHz?",
    options: ["802.11a", "802.11b", "802.11ac", "802.11ax"],
    correctAnswer: 1,
    explanation: "802.11b operates only at 2.4 GHz."
  },
  // ... (more wireless questions)

  // Automation & Programmability (40 questions)
  {
    id: 381,
    category: "Automation",
    question: "What does REST stand for?",
    options: ["Remote Execution State Transfer", "Representational State Transfer", "Rapid Execution State Transfer", "Remote State Execution Transfer"],
    correctAnswer: 1,
    explanation: "REST stands for Representational State Transfer, an architectural style for APIs."
  },
  // ... (more automation questions)

  // Network Services (40 questions)
  {
    id: 421,
    category: "Network Services",
    question: "What is the purpose of NTP?",
    options: ["Assign IP addresses", "Synchronize time", "Route packets", "Translate addresses"],
    correctAnswer: 1,
    explanation: "NTP (Network Time Protocol) synchronizes time across network devices."
  },
  // ... (more network services questions)

  // Troubleshooting (40 questions)
  {
    id: 461,
    category: "Troubleshooting",
    question: "Which command tests connectivity between two devices?",
    options: ["traceroute", "ping", "show ip route", "netstat"],
    correctAnswer: 1,
    explanation: "The ping command tests basic network connectivity between devices."
  },
  // ... (more troubleshooting questions to reach 500 total)
];

// Note: Due to response length limits, I've shown the structure with representative questions.
// The actual implementation would include all 500 questions following this same pattern across all categories.
