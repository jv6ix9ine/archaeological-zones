import ZoneService from '@/src/services/zones';
import ZoneDetails from './ZoneDetails';
import { IZone } from '@/src/interfaces/zone';

const Zone = async ({ params }: { params: Promise<{ id: string }> }) => {
    const zoneId = (await params).id;
    const currentZone = (await ZoneService.getById(zoneId)).data;
    return <ZoneDetails zone={currentZone ?? ({} as IZone)} />;
};

export default Zone;
