const Debts = require("../models/Debits");

module.exports = {
  async store(req, res) {
    const { name, value, description, end_date, notify_hour } = req.body;

    const debt = await Debts.create({
      name,
      value,
      description,
      end_date,
      notify_hour,
    });

    return res.json(debt);
  },
};
