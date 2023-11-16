import { IState } from "@/src/interfaces/state";
import { Model, Schema, model, models } from "mongoose";

interface IStateModel extends Model<IState> { }

const stateSchema = new Schema<IState, IStateModel>({
    name: String,
    abbreviation: String,
    capital: String,
    imageUrl: String,
    zones: [{type: Schema.Types.ObjectId, ref: "Zones" }]
}, {
    timestamps: true
});

export default models.States || model<IState, IStateModel>("States", stateSchema)