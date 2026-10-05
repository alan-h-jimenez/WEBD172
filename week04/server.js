const express = require("express");

const app = express();
const PORT = 3000;

const tools = [
    {
        id: 1,
        model: "2838-20",
        brand: "Milwaukee",
        name: "M18 FUEL 18V Lithium-Ion Cordless Brushless 1/2 in. Router",
        cordless: true,
        image: "https://images.thdstatic.com/productImages/367b2f12-12a7-4aba-b403-8c9f53e3df57/svn/milwaukee-wood-routers-2838-20-1d_600.jpg"
    },
    {
        id: 2,
        model: "DWS780",
        brand: "DEWALT",
        name: "15 Amp Corded 12 in. Double Bevel Sliding Compound Miter Saw with XPS technology, Blade Wrench and Material Clamp",
        cordless: false,
        image: "https://images.thdstatic.com/productImages/7a5da777-efd1-4bdb-958c-f1da097c431f/svn/dewalt-miter-saws-dws780-64_600.jpg"
    },
    {
        id: 3,
        model: "G0771Z",
        brand: "Grizzly Industrial",
        name: "10 in. 2 HP 120V Hybrid Table Saw w/ T-Shaped Fence",
        cordless: false,
        image: "https://images.thdstatic.com/productImages/684f29b8-20f8-4bdf-a5c2-9782d0c18e6e/svn/grizzly-industrial-stationary-table-saws-g0771z-c3_600.jpg"
    },
    {
        id: 4,
        model: "DCD777D1",
        brand: "DEWALT",
        name: "20-Volt MAX Lithium-Ion Cordless 1/2 in. Compact Drill/Driver Kit with 2.0 Ah Battery and Charger",
        cordless: true,
        image: "https://images.thdstatic.com/productImages/bdef6e77-d6c9-452b-85af-966f118b7cea/svn/dewalt-power-drills-dcd777d1-64_600.jpg"
    },
    {
        id: 5,
        model: "2834-20",
        brand: "Milwaukee",
        name: "M18 FUEL 18V Lithium-Ion Brushless Cordless 7-1/4 in. Circular Saw",
        cordless: true,
        image: "https://images.thdstatic.com/productImages/1d0de9d9-f2fb-4506-9bc6-33381901ebfa/svn/milwaukee-circular-saws-2834-20-64_600.jpg"
    },
    {
        id: 6,
        model: "R26011",
        brand: "RIDGID",
        name: "3 Amp Corded 5 in. Random Orbital Sander with AIRGUARD Technology",
        cordless: false,
        image: "https://images.thdstatic.com/productImages/ff900892-d1d6-431b-8380-260e596e5c5f/svn/ridgid-orbital-sanders-r26011-40_600.jpg"
    }
];

// Middleware
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Static routes
app.use(express.static("public"));

app.get("/about", (req, res) => {
    res.send(`
        <h1>Alan Jimenez</h1>
        <p>WEBD 172 - Full Stack JavaScript</p>
        <p>Fall 2026</p>
    `);
});

// JSON response
app.get("/api/tools", (req, res) => {
    res.json(tools);
});

// Dynamic routes
app.get("/api/tools/:id", (req, res) => {
    const id = Number(req.params.id);

    const tool = tools.find(
        tool => tool.id === id
    );

    if (!tool) {
        return res.status(404).json({message: "Tool not found"});
    }

    res.json(tool);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});