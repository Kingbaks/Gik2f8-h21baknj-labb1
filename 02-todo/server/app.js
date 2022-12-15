const express = require("express");
const app = express();
const fs = require("fs/promises");

const PORT = 5000;

app
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "*");
		res.header("Access-Control-Allow-Method", "*");

		next();
	});

app.get("/task", async (req, res) => {
	try {
		const listBuffer = await fs.readFile("./tasks.json");

		const currentTasks = JSON.parse(listBuffer);

		if (currentTasks.length > 0) {
			await fs.writeFile(
				"./tasks.json",
				JSON.stringify(currentTasks.filter((task) => task.id != id))
			);

			res.send({ message: `Uppgift med id ${id} togs bort` });
		} else {
			res.status(404).send({ error: "Ingen uppgift att ta bort" });
		}
	} catch (error) {
		/* Om något annat fel uppstår, skickas statuskod 500, dvs. ett generellt serverfel, tillsammans med information om felet.  */
		res.status(500).send({ error: error.stack });
	}
});

app.listen(PORT, () => console.log("server running on  http://localhost:5000"));
