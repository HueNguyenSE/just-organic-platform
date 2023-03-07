import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
		},
        name: {
            type: String,
            required: true,
        },
        origin: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
		images: {
			type: Array[String],
			required: true,
		},
		seller: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		priceRanges: [
            {
                unitPrice: { type: Number, required: true },
                minQty: { type: Number, required: true }
            }
        ],
        uom: {
			type: String,
			required: true,
		},
        countInStock: {
			type: Number,
			required: true,
            default: 0
		},
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        numReviews: {
			type: Number,
			required: true,
            default: 0
		},
        reviews: [reviewSchema],
        shippingArea: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('Product', productSchema);

export default User;
