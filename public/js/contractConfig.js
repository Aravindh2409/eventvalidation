const fundAnnouncementsAddress = '0xd89896B1670ca5C21E0AB60c496B7F0628712577'; 
    const fundAnnouncementsABI= [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "department",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "purpose",
				"type": "string"
			}
		],
		"name": "announceFund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "department",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "purpose",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "announcedBy",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "FundAnnounced",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "announcements",
		"outputs": [
			{
				"internalType": "string",
				"name": "department",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "purpose",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "announcedBy",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAnnouncements",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "department",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "purpose",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "announcedBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct FundAnnouncements.FundAnnouncement[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const zonalFundRequestsAddress = '0xF53185b5C06B6a33f3c5669B9c5Ccd72F066B3E2';
const zonalFundRequestsABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_r	equestId",
				"type": "uint256"
			}
		],
		"name": "approveFund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "FundApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "zone",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "eventPlan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "budget",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "FundRequested",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_zone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_eventPlan",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_budget",
				"type": "uint256"
			}
		],
		"name": "requestFund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "zone",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "eventPlan",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "budget",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "requester",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct ZonalFundRequests.FundRequest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequestCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requests",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "zone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eventPlan",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "budget",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]