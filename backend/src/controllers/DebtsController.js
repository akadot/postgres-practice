const Debts = require("../models/Debits");

module.exports = {
  async index(req, res) {
    const debts = await Debts.findAll();

    return res.json(debts);
  },

  async store(req, res) {
    const { name, value, description, end_date, notify_hour, color } = req.body;

    const debt = await Debts.create({
      name,
      value,
      description,
      end_date,
      notify_hour,
      color,
    });

    return res.json(debt);
  },

  async edit(req, res) {
    const { id } = req.params;
    const newData = req.body;
    const oldData = await Debts;
    console.log(oldData);

    const debt_id = await Debts.findByPk(id);

    if (!debt_id) {
      return res.status(400).json({ error: "Debt not found." });
    }

    await Debts.update(newData, { where: { id: id } });

    return res.json({ msg: `Debts with id ${id} updated.` });
  },

  async delete(req, res) {
    const { id } = req.params;

    const debt_id = await Debts.findByPk(id);

    if (!debt_id) {
      return res.status(400).json({ error: "Debt not found." });
    }

    await Debts.destroy({ where: { id: id } });

    return res.json({ msg: `Debts with id ${id} deleted` });
  },
};
