import { Schema, model, models } from "mongoose";

const articleModel = new Schema({
  si_id: {
    type: Schema.Types.ObjectId,
    ref: "ServiceInvoice",
    required: true,
  },
  quantity: { type: Number, required: true },
  unit: { type: Number, required: true },
  article_name: { type: String, required: true },
  unit_price: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const Article = models.Article || model("Article", articleModel, "articles");
export default Article;
