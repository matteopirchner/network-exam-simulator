export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  // Network Fundamentals (25 questions)
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

  // IP Addressing (20 questions)
  {
    id: 26,
    category: "IP Addressing",
    question: "What is the network address of 192.168.10.45/26?",
    options: ["192.168.10.0", "192.168.10.32", "192.168.10.64", "192.168.10.128"],
    correctAnswer: 0,
    explanation: "/26 gives 64 addresses per subnet. 45 falls in the 192.168.10.0 subnet."
  },
  {
    id: 27,
    category: "IP Addressing",
    question: "How many host addresses are available in a /29 subnet?",
    options: ["4", "6", "8", "14"],
    correctAnswer: 1,
    explanation: "A /29 subnet has 8 total addresses, minus 2 (network and broadcast) = 6 usable host addresses."
  },
  {
    id: 28,
    category: "IP Addressing",
    question: "Which IPv6 address is the loopback address?",
    options: ["::1", "FE80::", "2001::", "FF02::1"],
    correctAnswer: 0,
    explanation: "::1 is the IPv6 loopback address equivalent to 127.0.0.1 in IPv4."
  },
  {
    id: 29,
    category: "IP Addressing",
    question: "What is the first usable IP address in the 172.16.32.0/20 network?",
    options: ["172.16.32.0", "172.16.32.1", "172.16.33.1", "172.16.31.1"],
    correctAnswer: 1,
    explanation: "The first usable address is always the network address + 1, which is 172.16.32.1."
  },
  {
    id: 30,
    category: "IP Addressing",
    question: "Which IPv6 address type is used for one-to-many communication?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    correctAnswer: 1,
    explanation: "Multicast addresses are used for one-to-many communication in IPv6."
  },
  {
    id: 31,
    category: "IP Addressing",
    question: "What is the broadcast address for 10.1.1.0/24?",
    options: ["10.1.1.0", "10.1.1.255", "10.1.2.0", "10.1.1.254"],
    correctAnswer: 1,
    explanation: "The broadcast address is the last address in the subnet: 10.1.1.255."
  },
  {
    id: 32,
    category: "IP Addressing",
    question: "Which private IP address range belongs to Class A?",
    options: ["172.16.0.0 - 172.31.255.255", "192.168.0.0 - 192.168.255.255", "10.0.0.0 - 10.255.255.255", "169.254.0.0 - 169.254.255.255"],
    correctAnswer: 2,
    explanation: "The 10.0.0.0 - 10.255.255.255 range is the Class A private address range."
  },
  {
    id: 33,
    category: "IP Addressing",
    question: "What does CIDR stand for?",
    options: ["Classless Internet Domain Routing", "Classless Inter-Domain Routing", "Class Internet Domain Routing", "Central Inter-Domain Routing"],
    correctAnswer: 1,
    explanation: "CIDR stands for Classless Inter-Domain Routing."
  },
  {
    id: 34,
    category: "IP Addressing",
    question: "How many bits are in an IPv6 address?",
    options: ["32", "64", "96", "128"],
    correctAnswer: 3,
    explanation: "IPv6 addresses are 128 bits long."
  },
  {
    id: 35,
    category: "IP Addressing",
    question: "What is the subnet mask for a /27 network in decimal?",
    options: ["255.255.255.224", "255.255.255.192", "255.255.255.240", "255.255.255.248"],
    correctAnswer: 0,
    explanation: "/27 equals 255.255.255.224 (11111111.11111111.11111111.11100000)."
  },
  {
    id: 36,
    category: "IP Addressing",
    question: "Which IPv6 address prefix indicates a link-local address?",
    options: ["FE80::/10", "FF00::/8", "2001::/16", "FC00::/7"],
    correctAnswer: 0,
    explanation: "FE80::/10 is the prefix for IPv6 link-local addresses."
  },
  {
    id: 37,
    category: "IP Addressing",
    question: "What is the purpose of APIPA?",
    options: ["Assign public IP addresses", "Automatically assign IP when DHCP fails", "Route packets", "Translate addresses"],
    correctAnswer: 1,
    explanation: "APIPA (169.254.x.x) automatically assigns an IP address when DHCP is unavailable."
  },
  {
    id: 38,
    category: "IP Addressing",
    question: "How many subnets can be created from a /24 network when using /26?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "Borrowing 2 bits (from /24 to /26) creates 2^2 = 4 subnets."
  },
  {
    id: 39,
    category: "IP Addressing",
    question: "What is the wildcard mask for a /28 subnet?",
    options: ["0.0.0.15", "0.0.0.31", "0.0.0.7", "0.0.0.63"],
    correctAnswer: 0,
    explanation: "A /28 subnet mask is 255.255.255.240, so the wildcard mask is 0.0.0.15."
  },
  {
    id: 40,
    category: "IP Addressing",
    question: "Which address is NOT routable on the internet?",
    options: ["8.8.8.8", "172.16.0.1", "64.233.160.0", "1.1.1.1"],
    correctAnswer: 1,
    explanation: "172.16.0.1 is a private IP address and is not routable on the internet."
  },
  {
    id: 41,
    category: "IP Addressing",
    question: "What is the prefix length equivalent to 255.255.252.0?",
    options: ["/20", "/21", "/22", "/23"],
    correctAnswer: 2,
    explanation: "255.255.252.0 is equivalent to /22 (22 network bits)."
  },
  {
    id: 42,
    category: "IP Addressing",
    question: "Which IPv6 address type is routable and globally unique?",
    options: ["Link-local", "Unique local", "Global unicast", "Multicast"],
    correctAnswer: 2,
    explanation: "Global unicast addresses are routable on the internet and globally unique."
  },
  {
    id: 43,
    category: "IP Addressing",
    question: "What is the last usable host address in 192.168.100.0/25?",
    options: ["192.168.100.126", "192.168.100.127", "192.168.100.128", "192.168.100.254"],
    correctAnswer: 0,
    explanation: "/25 creates subnets of 128 addresses. Last usable is broadcast - 1 = 192.168.100.126."
  },
  {
    id: 44,
    category: "IP Addressing",
    question: "Which command configures an IP address on a Cisco router interface?",
    options: ["ip address 192.168.1.1 255.255.255.0", "set ip 192.168.1.1/24", "interface ip 192.168.1.1", "config ip 192.168.1.1"],
    correctAnswer: 0,
    explanation: "The 'ip address [IP] [mask]' command configures an IP address on an interface."
  },
  {
    id: 45,
    category: "IP Addressing",
    question: "What does VLSM stand for?",
    options: ["Variable Length Subnet Mask", "Virtual LAN Subnet Mask", "Variable Link Subnet Mode", "Virtual Length Subnet Mode"],
    correctAnswer: 0,
    explanation: "VLSM stands for Variable Length Subnet Mask, allowing different subnet sizes."
  },

  // Routing Protocols (20 questions)
  {
    id: 46,
    category: "Routing Protocols",
    question: "Which routing protocol uses the Bellman-Ford algorithm?",
    options: ["OSPF", "RIP", "EIGRP", "BGP"],
    correctAnswer: 1,
    explanation: "RIP (Routing Information Protocol) uses the Bellman-Ford algorithm."
  },
  {
    id: 47,
    category: "Routing Protocols",
    question: "What is the maximum hop count for RIPv2?",
    options: ["15", "16", "255", "Unlimited"],
    correctAnswer: 0,
    explanation: "RIP has a maximum hop count of 15; 16 is considered unreachable."
  },
  {
    id: 48,
    category: "Routing Protocols",
    question: "Which OSPF area must all other areas connect to?",
    options: ["Area 0", "Area 1", "Area 10", "Area 255"],
    correctAnswer: 0,
    explanation: "Area 0 (backbone area) is required, and all other areas must connect to it."
  },
  {
    id: 49,
    category: "Routing Protocols",
    question: "What metric does OSPF use?",
    options: ["Hop count", "Bandwidth", "Cost", "Delay"],
    correctAnswer: 2,
    explanation: "OSPF uses cost as its metric, which is based on bandwidth."
  },
  {
    id: 50,
    category: "Routing Protocols",
    question: "Which protocol is considered a hybrid routing protocol?",
    options: ["RIP", "OSPF", "EIGRP", "IS-IS"],
    correctAnswer: 2,
    explanation: "EIGRP is considered a hybrid routing protocol (advanced distance-vector)."
  },
  {
    id: 51,
    category: "Routing Protocols",
    question: "What is the administrative distance of EIGRP internal routes?",
    options: ["5", "90", "110", "120"],
    correctAnswer: 1,
    explanation: "EIGRP internal routes have an administrative distance of 90."
  },
  {
    id: 52,
    category: "Routing Protocols",
    question: "Which routing protocol is used for inter-AS routing?",
    options: ["OSPF", "RIP", "EIGRP", "BGP"],
    correctAnswer: 3,
    explanation: "BGP (Border Gateway Protocol) is used for routing between autonomous systems."
  },
  {
    id: 53,
    category: "Routing Protocols",
    question: "What multicast address does RIPv2 use?",
    options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    correctAnswer: 2,
    explanation: "RIPv2 uses multicast address 224.0.0.9 for updates."
  },
  {
    id: 54,
    category: "Routing Protocols",
    question: "Which command enables OSPF on a Cisco router?",
    options: ["router ospf [process-id]", "enable ospf", "ospf router", "start ospf"],
    correctAnswer: 0,
    explanation: "The 'router ospf [process-id]' command enables OSPF routing."
  },
  {
    id: 55,
    category: "Routing Protocols",
    question: "What does LSA stand for in OSPF?",
    options: ["Link State Advertisement", "Local State Advertisement", "Link System Address", "Local System Address"],
    correctAnswer: 0,
    explanation: "LSA stands for Link State Advertisement, used by OSPF to share routing information."
  },
  {
    id: 56,
    category: "Routing Protocols",
    question: "Which EIGRP packet is used to discover neighbors?",
    options: ["Update", "Query", "Reply", "Hello"],
    correctAnswer: 3,
    explanation: "EIGRP uses Hello packets to discover and maintain neighbor relationships."
  },
  {
    id: 57,
    category: "Routing Protocols",
    question: "What is the default hello interval for OSPF on broadcast networks?",
    options: ["5 seconds", "10 seconds", "30 seconds", "40 seconds"],
    correctAnswer: 1,
    explanation: "OSPF uses a 10-second hello interval on broadcast networks."
  },
  {
    id: 58,
    category: "Routing Protocols",
    question: "Which routing protocol supports VLSM?",
    options: ["RIPv1", "RIPv2", "IGRP", "All of the above"],
    correctAnswer: 1,
    explanation: "RIPv2 supports VLSM, while RIPv1 and IGRP do not."
  },
  {
    id: 59,
    category: "Routing Protocols",
    question: "What algorithm does OSPF use?",
    options: ["Bellman-Ford", "DUAL", "Dijkstra", "Path Vector"],
    correctAnswer: 2,
    explanation: "OSPF uses Dijkstra's Shortest Path First (SPF) algorithm."
  },
  {
    id: 60,
    category: "Routing Protocols",
    question: "What is the purpose of a stub area in OSPF?",
    options: ["Increase routing table size", "Reduce routing overhead", "Speed up convergence", "Create loops"],
    correctAnswer: 1,
    explanation: "Stub areas reduce routing overhead by limiting external route advertisements."
  },
  {
    id: 61,
    category: "Routing Protocols",
    question: "Which EIGRP table stores all learned routes?",
    options: ["Neighbor table", "Topology table", "Routing table", "LSA table"],
    correctAnswer: 1,
    explanation: "The topology table stores all routes learned by EIGRP."
  },
  {
    id: 62,
    category: "Routing Protocols",
    question: "What is the default administrative distance for static routes?",
    options: ["0", "1", "5", "10"],
    correctAnswer: 1,
    explanation: "Static routes have an administrative distance of 1 by default."
  },
  {
    id: 63,
    category: "Routing Protocols",
    question: "Which command displays EIGRP neighbors?",
    options: ["show eigrp neighbors", "show ip eigrp neighbors", "display eigrp neighbors", "show neighbors"],
    correctAnswer: 1,
    explanation: "The 'show ip eigrp neighbors' command displays EIGRP neighbor information."
  },
  {
    id: 64,
    category: "Routing Protocols",
    question: "What does the passive interface command do?",
    options: ["Stops routing updates on an interface", "Enables routing", "Increases bandwidth", "Disables the interface"],
    correctAnswer: 0,
    explanation: "The passive interface command prevents routing updates from being sent on that interface."
  },
  {
    id: 65,
    category: "Routing Protocols",
    question: "Which BGP attribute is used for path selection?",
    options: ["MED", "AS-PATH", "Local Preference", "All of the above"],
    correctAnswer: 3,
    explanation: "BGP uses multiple attributes including MED, AS-PATH, and Local Preference for path selection."
  },

  // Switching (15 questions)
  {
    id: 66,
    category: "Switching",
    question: "What is the purpose of Spanning Tree Protocol?",
    options: ["Increase bandwidth", "Prevent loops", "Encrypt traffic", "Route packets"],
    correctAnswer: 1,
    explanation: "STP prevents loops in switched networks by blocking redundant paths."
  },
  {
    id: 67,
    category: "Switching",
    question: "Which STP port state forwards traffic and learns MAC addresses?",
    options: ["Blocking", "Listening", "Learning", "Forwarding"],
    correctAnswer: 3,
    explanation: "The forwarding state both forwards traffic and learns MAC addresses."
  },
  {
    id: 68,
    category: "Switching",
    question: "What is the default VLAN on Cisco switches?",
    options: ["VLAN 0", "VLAN 1", "VLAN 10", "VLAN 100"],
    correctAnswer: 1,
    explanation: "VLAN 1 is the default VLAN on Cisco switches."
  },
  {
    id: 69,
    category: "Switching",
    question: "Which port type carries traffic for multiple VLANs?",
    options: ["Access port", "Trunk port", "Hybrid port", "Routed port"],
    correctAnswer: 1,
    explanation: "Trunk ports carry traffic for multiple VLANs using tagging."
  },
  {
    id: 70,
    category: "Switching",
    question: "What protocol does VTP use?",
    options: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"],
    correctAnswer: 0,
    explanation: "VTP (VLAN Trunking Protocol) operates at Layer 2."
  },
  {
    id: 71,
    category: "Switching",
    question: "Which command creates a VLAN on a Cisco switch?",
    options: ["create vlan 10", "vlan 10", "add vlan 10", "new vlan 10"],
    correctAnswer: 1,
    explanation: "The 'vlan [number]' command in global configuration mode creates a VLAN."
  },
  {
    id: 72,
    category: "Switching",
    question: "What is the maximum number of VLANs in the extended range?",
    options: ["1005", "2048", "4094", "4096"],
    correctAnswer: 2,
    explanation: "VLAN IDs range from 1 to 4094 (4094 is the maximum)."
  },
  {
    id: 73,
    category: "Switching",
    question: "Which STP version elects a root bridge per VLAN?",
    options: ["STP", "RSTP", "PVST+", "MST"],
    correctAnswer: 2,
    explanation: "PVST+ (Per-VLAN Spanning Tree Plus) elects a root bridge for each VLAN."
  },
  {
    id: 74,
    category: "Switching",
    question: "What is the IEEE standard for VLAN tagging?",
    options: ["802.1D", "802.1Q", "802.1X", "802.1W"],
    correctAnswer: 1,
    explanation: "IEEE 802.1Q is the standard for VLAN tagging on trunk links."
  },
  {
    id: 75,
    category: "Switching",
    question: "Which port security violation mode shuts down the port?",
    options: ["Protect", "Restrict", "Shutdown", "Disable"],
    correctAnswer: 2,
    explanation: "The shutdown violation mode disables the port when a violation occurs."
  },
  {
    id: 76,
    category: "Switching",
    question: "What is the default priority value for STP?",
    options: ["0", "32768", "65535", "100"],
    correctAnswer: 1,
    explanation: "The default STP priority is 32768."
  },
  {
    id: 77,
    category: "Switching",
    question: "Which command assigns a port to VLAN 20?",
    options: ["vlan 20", "switchport vlan 20", "switchport access vlan 20", "set vlan 20"],
    correctAnswer: 2,
    explanation: "The 'switchport access vlan 20' command assigns an access port to VLAN 20."
  },
  {
    id: 78,
    category: "Switching",
    question: "What does EtherChannel do?",
    options: ["Encrypts traffic", "Combines multiple links", "Segments networks", "Routes traffic"],
    correctAnswer: 1,
    explanation: "EtherChannel combines multiple physical links into one logical link for increased bandwidth."
  },
  {
    id: 79,
    category: "Switching",
    question: "Which protocol negotiates trunk formation?",
    options: ["VTP", "DTP", "STP", "CDP"],
    correctAnswer: 1,
    explanation: "DTP (Dynamic Trunking Protocol) negotiates trunk link formation."
  },
  {
    id: 80,
    category: "Switching",
    question: "What is the native VLAN used for?",
    options: ["Management traffic", "Untagged traffic on trunks", "Voice traffic", "Broadcast traffic"],
    correctAnswer: 1,
    explanation: "The native VLAN carries untagged traffic on trunk links."
  },

  // Security (15 questions)
  {
    id: 81,
    category: "Security",
    question: "Which protocol provides secure remote access to network devices?",
    options: ["Telnet", "SSH", "HTTP", "FTP"],
    correctAnswer: 1,
    explanation: "SSH (Secure Shell) provides encrypted remote access to network devices."
  },
  {
    id: 82,
    category: "Security",
    question: "What port does SSH use by default?",
    options: ["21", "22", "23", "443"],
    correctAnswer: 1,
    explanation: "SSH uses TCP port 22 by default."
  },
  {
    id: 83,
    category: "Security",
    question: "Which AAA component verifies user identity?",
    options: ["Authentication", "Authorization", "Accounting", "Auditing"],
    correctAnswer: 0,
    explanation: "Authentication verifies the identity of users accessing the network."
  },
  {
    id: 84,
    category: "Security",
    question: "What does ACL stand for?",
    options: ["Access Control List", "Access Configuration List", "Authentication Control List", "Automatic Control List"],
    correctAnswer: 0,
    explanation: "ACL stands for Access Control List, used to filter traffic."
  },
  {
    id: 85,
    category: "Security",
    question: "Which ACL type uses numbers 1-99 and 1300-1999?",
    options: ["Extended ACL", "Standard ACL", "Named ACL", "Dynamic ACL"],
    correctAnswer: 1,
    explanation: "Standard ACLs use numbers 1-99 and 1300-1999."
  },
  {
    id: 86,
    category: "Security",
    question: "Where should a standard ACL be placed?",
    options: ["Close to the source", "Close to the destination", "On the firewall", "On the core switch"],
    correctAnswer: 1,
    explanation: "Standard ACLs should be placed close to the destination to minimize traffic filtering."
  },
  {
    id: 87,
    category: "Security",
    question: "What is the implicit rule at the end of every ACL?",
    options: ["Permit all", "Deny all", "Log all", "No rule"],
    correctAnswer: 1,
    explanation: "Every ACL has an implicit 'deny all' at the end."
  },
  {
    id: 88,
    category: "Security",
    question: "Which security feature limits the number of MAC addresses on a port?",
    options: ["DHCP Snooping", "Port Security", "Dynamic ARP Inspection", "IP Source Guard"],
    correctAnswer: 1,
    explanation: "Port Security limits the number of MAC addresses allowed on a switch port."
  },
  {
    id: 89,
    category: "Security",
    question: "What does DHCP Snooping protect against?",
    options: ["Rogue DHCP servers", "ARP spoofing", "MAC flooding", "Port scanning"],
    correctAnswer: 0,
    explanation: "DHCP Snooping protects against rogue DHCP servers on the network."
  },
  {
    id: 90,
    category: "Security",
    question: "Which protocol is used for centralized authentication?",
    options: ["TACACS+", "SNMP", "NTP", "CDP"],
    correctAnswer: 0,
    explanation: "TACACS+ provides centralized authentication, authorization, and accounting."
  },
  {
    id: 91,
    category: "Security",
    question: "What type of attack floods a network with ARP requests?",
    options: ["DDoS", "ARP poisoning", "MAC flooding", "Smurf attack"],
    correctAnswer: 1,
    explanation: "ARP poisoning (or ARP spoofing) involves sending fake ARP messages to flood the network."
  },
  {
    id: 92,
    category: "Security",
    question: "Which command enables password encryption on a Cisco device?",
    options: ["encrypt passwords", "service password-encryption", "enable secret", "password encryption"],
    correctAnswer: 1,
    explanation: "The 'service password-encryption' command encrypts plaintext passwords."
  },
  {
    id: 93,
    category: "Security",
    question: "What is the difference between 'enable password' and 'enable secret'?",
    options: ["No difference", "Secret is encrypted", "Password is stronger", "Secret is for SSH only"],
    correctAnswer: 1,
    explanation: "'enable secret' uses stronger MD5 encryption, while 'enable password' is plaintext or weakly encrypted."
  },
  {
    id: 94,
    category: "Security",
    question: "Which IEEE standard defines port-based network access control?",
    options: ["802.1D", "802.1Q", "802.1X", "802.1W"],
    correctAnswer: 2,
    explanation: "IEEE 802.1X defines port-based network access control for authentication."
  },
  {
    id: 95,
    category: "Security",
    question: "What does DAI stand for?",
    options: ["Dynamic Address Inspection", "Dynamic ARP Inspection", "Direct Access Interface", "Dynamic Authentication Interface"],
    correctAnswer: 1,
    explanation: "DAI stands for Dynamic ARP Inspection, which prevents ARP spoofing."
  },

  // Automation & Programmability (10 questions)
  {
    id: 96,
    category: "Automation",
    question: "What does REST stand for?",
    options: ["Remote Execution State Transfer", "Representational State Transfer", "Rapid Execution State Transfer", "Remote State Execution Transfer"],
    correctAnswer: 1,
    explanation: "REST stands for Representational State Transfer, an architectural style for APIs."
  },
  {
    id: 97,
    category: "Automation",
    question: "Which data format is commonly used with REST APIs?",
    options: ["XML", "JSON", "YAML", "CSV"],
    correctAnswer: 1,
    explanation: "JSON (JavaScript Object Notation) is commonly used with REST APIs."
  },
  {
    id: 98,
    category: "Automation",
    question: "What HTTP method is used to retrieve data from a REST API?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: 1,
    explanation: "The GET method is used to retrieve data from a REST API."
  },
  {
    id: 99,
    category: "Automation",
    question: "Which configuration management tool uses playbooks?",
    options: ["Puppet", "Chef", "Ansible", "SaltStack"],
    correctAnswer: 2,
    explanation: "Ansible uses playbooks written in YAML for configuration management."
  },
  {
    id: 100,
    category: "Automation",
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Automated Programming Interface", "Application Process Interface", "Automated Process Interface"],
    correctAnswer: 0,
    explanation: "API stands for Application Programming Interface."
  },
  {
    id: 101,
    category: "Automation",
    question: "Which scripting language is commonly used for network automation?",
    options: ["Java", "C++", "Python", "Ruby"],
    correctAnswer: 2,
    explanation: "Python is widely used for network automation due to its simplicity and extensive libraries."
  },
  {
    id: 102,
    category: "Automation",
    question: "What is the purpose of NETCONF?",
    options: ["Monitor networks", "Configure network devices", "Analyze traffic", "Encrypt data"],
    correctAnswer: 1,
    explanation: "NETCONF is a protocol for network device configuration management."
  },
  {
    id: 103,
    category: "Automation",
    question: "Which controller platform is used for SDN?",
    options: ["OpenFlow", "Cisco DNA Center", "VMware NSX", "All of the above"],
    correctAnswer: 3,
    explanation: "All listed platforms are used in SDN environments for network control and management."
  },
  {
    id: 104,
    category: "Automation",
    question: "What does YANG stand for?",
    options: ["Yet Another Next Generation", "Yet Another Network Gateway", "Yet Another Naming Group", "None of the above"],
    correctAnswer: 0,
    explanation: "YANG stands for Yet Another Next Generation, a data modeling language."
  },
  {
    id: 105,
    category: "Automation",
    question: "Which HTTP status code indicates success?",
    options: ["200", "404", "500", "301"],
    correctAnswer: 0,
    explanation: "HTTP status code 200 indicates a successful request."
  },

  // Wireless (10 questions)
  {
    id: 106,
    category: "Wireless",
    question: "Which wireless standard operates only at 2.4 GHz?",
    options: ["802.11a", "802.11b", "802.11ac", "802.11ax"],
    correctAnswer: 1,
    explanation: "802.11b operates only at 2.4 GHz."
  },
  {
    id: 107,
    category: "Wireless",
    question: "What is the maximum data rate of 802.11n?",
    options: ["54 Mbps", "150 Mbps", "600 Mbps", "1.3 Gbps"],
    correctAnswer: 2,
    explanation: "802.11n can achieve up to 600 Mbps with 4 spatial streams."
  },
  {
    id: 108,
    category: "Wireless",
    question: "Which wireless encryption is the most secure?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: 3,
    explanation: "WPA3 is the most secure wireless encryption standard currently available."
  },
  {
    id: 109,
    category: "Wireless",
    question: "What is the purpose of an SSID?",
    options: ["Encrypt data", "Identify a wireless network", "Assign IP addresses", "Route traffic"],
    correctAnswer: 1,
    explanation: "SSID (Service Set Identifier) identifies a wireless network."
  },
  {
    id: 110,
    category: "Wireless",
    question: "Which frequency band has more non-overlapping channels?",
    options: ["2.4 GHz", "5 GHz", "Both are equal", "Neither"],
    correctAnswer: 1,
    explanation: "The 5 GHz band has more non-overlapping channels than 2.4 GHz."
  },
  {
    id: 111,
    category: "Wireless",
    question: "How many non-overlapping channels are available in 2.4 GHz?",
    options: ["3", "11", "13", "23"],
    correctAnswer: 0,
    explanation: "Only 3 non-overlapping channels (1, 6, 11) exist in the 2.4 GHz band."
  },
  {
    id: 112,
    category: "Wireless",
    question: "What does a wireless LAN controller (WLC) do?",
    options: ["Encrypt traffic", "Manage multiple access points", "Route packets", "Assign VLANs"],
    correctAnswer: 1,
    explanation: "A WLC centrally manages and configures multiple wireless access points."
  },
  {
    id: 113,
    category: "Wireless",
    question: "Which mode allows an AP to connect to another AP wirelessly?",
    options: ["Root mode", "Bridge mode", "Repeater mode", "Client mode"],
    correctAnswer: 1,
    explanation: "Bridge mode allows APs to connect wirelessly to extend the network."
  },
  {
    id: 114,
    category: "Wireless",
    question: "What is the purpose of QoS in wireless networks?",
    options: ["Increase speed", "Prioritize traffic", "Encrypt data", "Assign IP addresses"],
    correctAnswer: 1,
    explanation: "QoS (Quality of Service) prioritizes certain types of traffic for better performance."
  },
  {
    id: 115,
    category: "Wireless",
    question: "Which protocol provides centralized authentication for wireless networks?",
    options: ["RADIUS", "TACACS", "SNMP", "NTP"],
    correctAnswer: 0,
    explanation: "RADIUS provides centralized authentication for wireless and other network access."
  },

  // Additional Mixed Questions (5 questions)
  {
    id: 116,
    category: "Network Services",
    question: "What is the purpose of NTP?",
    options: ["Assign IP addresses", "Synchronize time", "Route packets", "Translate addresses"],
    correctAnswer: 1,
    explanation: "NTP (Network Time Protocol) synchronizes time across network devices."
  },
  {
    id: 117,
    category: "Network Services",
    question: "Which protocol is used for network management?",
    options: ["SNMP", "FTP", "TFTP", "HTTP"],
    correctAnswer: 0,
    explanation: "SNMP (Simple Network Management Protocol) is used for network device management."
  },
  {
    id: 118,
    category: "Network Services",
    question: "What does DNS do?",
    options: ["Encrypts traffic", "Resolves domain names to IP addresses", "Assigns IP addresses", "Routes packets"],
    correctAnswer: 1,
    explanation: "DNS (Domain Name System) resolves domain names to IP addresses."
  },
  {
    id: 119,
    category: "Network Services",
    question: "Which protocol transfers files with authentication?",
    options: ["TFTP", "FTP", "SNMP", "ICMP"],
    correctAnswer: 1,
    explanation: "FTP (File Transfer Protocol) transfers files with username/password authentication."
  },
  {
    id: 120,
    category: "Troubleshooting",
    question: "Which command tests connectivity between two devices?",
    options: ["traceroute", "ping", "show ip route", "netstat"],
    correctAnswer: 1,
    explanation: "The ping command tests basic network connectivity between devices."
  }
];
