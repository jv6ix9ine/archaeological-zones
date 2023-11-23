import { IZone } from "@/src/interfaces/zone";
import { Model, Schema, model, models } from "mongoose";

interface IZoneModel extends Model<IZone> { }

const zoneSchema = new Schema<IZone, IZoneModel>({
    choords: { latitude: Number, longitude: Number },
    description: String,
    images: [{ url: String }, { _id: false }],
    location: String,
    mainImageUrl: String,
    name: String,
    schedules: String,
    state: { type: Schema.Types.ObjectId, ref: "States" }
}, {
    timestamps: true
});

export default models.Zones || model<IZone, IZone>("Zones", zoneSchema)