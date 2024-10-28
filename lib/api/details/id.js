import dbConnect from '../../mongodb';
import itemModel from '../../../models/itemModel';

export default async function handler(req, res) {
    const { id } = req.query;

    await dbConnect(); // Conectar a MongoDB usando la función de utilidad

    if (req.method === 'GET') {
        try {
            const item = await itemModel.findById(id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ message: 'Error when getting item details', error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
