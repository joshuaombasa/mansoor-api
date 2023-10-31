const user = {email : "joshuaombasa@gmail.com", password: 'yd3FLBxZkdDkFLv'}

const vendorEquipment = [
    { id: "1", name: "Truck", status: "working", price: 12000, imageUrl: "https://t4.ftcdn.net/jpg/06/22/17/25/240_F_622172533_XUUnw0QJm8dXFq3ME4d6G8vcAaykLaF0.jpg", description: "Dump trucks are used in construction sites to carry the material in larger quantities from one site to another site or to the dump yard. Generally, in big construction site, off-road dump trucks are used. These off-road dump trucks contains large wheels with huge space for materials which enables them to carry huge quantity of material in any type of ground conditions." }, { id: "4", name: "compactor", status: "failed", price: 8000, imageUrl: "https://t4.ftcdn.net/jpg/03/21/50/15/240_F_321501585_QS9UrrtAIRkCKJkx1dLwsIt1XlBbYv9p.jpg", description: "Compactors or Rollers are used to compact the material or earth surface. Different types of compactors are available for different compacting purposes. Smooth wheel rollers are used for compacting shallow layers of soil or asphalt etc. sheep-foot rollers are used for deep compaction purposes. Pneumatic tyred rollers are used for compacting fine grained soils, asphalt layers etc." }, { id: "6", name: "Loader", status: "working", price: 12000, imageUrl: "https://t4.ftcdn.net/jpg/01/85/45/73/240_F_185457396_j4fggyyPIhkJtG1EeiKkdMwTLSUw71Dh.jpg", description: "Loaders are used in construction site to load the material onto dumpers, trucks etc. The materials may be excavated soil, demolition waste, raw materials, etc. A loader contain large sized bucket at its front with shorter moving arm. Loader may be either tracked or wheeled. Wheeled loaders are widely used in sites while tracked or crawled loaders are used in sites where wheeled vehicles cannot reach." }
]

const incomeList = [
    { id: "1", month: "January", income: 120000 },
    { id: "2", month: "February", income: 95000 },
    { id: "3", month: "March", income: 405000 },
    { id: "4", month: "April", income: 80000 },
    { id: "5", month: "May", income: 315000 },
    { id: "6", month: "June", income: 90000 },
    { id: "7", month: "July", income: 110000 },
    { id: "8", month: "August", income: 100000 },
    { id: "9", month: "September", income: 85000 },
    { id: "10", month: "October", income: 125000 },
    { id: "11", month: "November", income: 98000 },
    { id: "12", month: "December", income: 500000 }
];

const transactionsData = [
    { amount: 720, date: "Oct 25, '23", id: "1" },
    { amount: 560, date: "Sep 15, '23", id: "2" },
    { amount: 980, date: "Aug 3, '23", id: "3" },
    { amount: 850, date: "Jul 19, '23", id: "4" },
    { amount: 670, date: "Jun 8, '23", id: "5" },
    { amount: 430, date: "May 17, '23", id: "6" },
    { amount: 790, date: "Apr 28, '23", id: "7" },
    { amount: 920, date: "Mar 5, '23", id: "8" },
    { amount: 500, date: "Feb 14, '23", id: "9" },
    { amount: 670, date: "Jan 23, '23", id: "10" }
];

const reviews = [
    {
        rating: 4,
        name: "John Doe",
        date: "October 20, 2023",
        text: "The Loader was a game-changer for our construction project. It handled heavy materials effortlessly and significantly sped up our work. Highly satisfied with its performance.",
        id: "1",
    },
    {
        rating: 5,
        name: "Jane Smith",
        date: "October 15, 2023",
        text: "We relied on the Crane for our latest building construction, and it exceeded our expectations. The precision and power of the Crane made the task smooth and efficient. Would definitely use it again.",
        id: "2",
    },
    {
        rating: 3,
        name: "Michael Johnson",
        date: "October 12, 2023",
        text: "The Compactor did an adequate job, although we had hoped for a more seamless experience. It required some adjustments to achieve the desired results. Decent equipment overall.",
        id: "3",
    },
    {
        rating: 5,
        name: "Emily Williams",
        date: "October 10, 2023",
        text: "The Truck we rented was reliable and robust. It transported materials efficiently and proved to be a vital asset for our project. Very satisfied with its performance and durability.",
        id: "4",
    }
];

const otherEquipment = [{ id: "5", name: "Excavator", type: "failed", price: 12000, imageUrl: "https://t4.ftcdn.net/jpg/06/19/97/25/240_F_619972586_TmUQYgJPtqWnyCtRBq0AMoYYwszGjad1.jpg", description: "Excavators are important and widely used equipment in construction industry. Their general purpose is to excavation but other than that they are also used for many purposes like heavy lifting, demolition, river dredging, cutting of trees etc." }, { id: "6", name: "Loader", status: "working", price: 12000, imageUrl: "https://t4.ftcdn.net/jpg/01/85/45/73/240_F_185457396_j4fggyyPIhkJtG1EeiKkdMwTLSUw71Dh.jpg", description: "Loaders are used in construction site to load the material onto dumpers, trucks etc. The materials may be excavated soil, demolition waste, raw materials, etc. A loader contain large sized bucket at its front with shorter moving arm. Loader may be either tracked or wheeled. Wheeled loaders are widely used in sites while tracked or crawled loaders are used in sites where wheeled vehicles cannot reach." },]

const equipment = [{ id: "1", name: "Truck", status: "working", price: 12000, imageUrl: "https://t4.ftcdn.net/jpg/06/22/17/25/240_F_622172533_XUUnw0QJm8dXFq3ME4d6G8vcAaykLaF0.jpg", description: "Dump trucks are used in construction sites to carry the material in larger quantities from one site to another site or to the dump yard. Generally, in big construction site, off-road dump trucks are used. These off-road dump trucks contains large wheels with huge space for materials which enables them to carry huge quantity of material in any type of ground conditions." }, { id: "2", name: "crane", status: "failed", price: 6000, imageUrl: "https://t3.ftcdn.net/jpg/01/79/03/56/240_F_179035673_zXpmg0CcsyLI1fqLP0RMDYxh3ToLxuVn.jpg", description: "Cranes are used for hoisting purposes in construction of tall structures. Heavy materials like pre-stressed concrete blocks, steel trusses, frames etc. can be easily lifted to required height using this type of equipment." }, { id: "3", name: "generator", status: "working", price: 10000, imageUrl: "https://t3.ftcdn.net/jpg/06/26/09/54/240_F_626095496_Knzaz3lGnlevBvnIS3rsjyd1rKg0sZD2.jpg", description: "The Philips Brilliance iCT series is known for its excellent image quality, fast scanning speeds, and versatile clinical applications. It offers advanced features such as adaptive image filters and dose management tools, ensuring efficient and precise imaging for a variety of applications, including trauma and oncology imaging." }, { id: "4", name: "compactor", status: "failed", price: 8000, imageUrl: "https://t4.ftcdn.net/jpg/03/21/50/15/240_F_321501585_QS9UrrtAIRkCKJkx1dLwsIt1XlBbYv9p.jpg", description: "Compactors or Rollers are used to compact the material or earth surface. Different types of compactors are available for different compacting purposes. Smooth wheel rollers are used for compacting shallow layers of soil or asphalt etc. sheep-foot rollers are used for deep compaction purposes. Pneumatic tyred rollers are used for compacting fine grained soils, asphalt layers etc." }, ...otherEquipment]

module.exports = {user, vendorEquipment, incomeList, transactionsData, reviews, equipment}