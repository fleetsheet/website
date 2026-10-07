import acFilterService from '@/assets/photos/ac-filter-service.jpg'
import apartmentBuilding from '@/assets/photos/apartment-building.jpg'
import colleaguesTablets from '@/assets/photos/colleagues-tablets.jpg'
import dataCenter from '@/assets/photos/data-center.jpg'
import engineersRooftop from '@/assets/photos/engineers-rooftop.jpg'
import factoryTechnician from '@/assets/photos/factory-technician.jpg'
import hotelHousekeeping from '@/assets/photos/hotel-housekeeping.jpg'
import hvacTechnicians from '@/assets/photos/hvac-technicians.jpg'
import inspectionClipboard from '@/assets/photos/inspection-clipboard.jpg'
import mallAtrium from '@/assets/photos/mall-atrium.jpg'
import partnerMeeting from '@/assets/photos/partner-meeting.jpg'
import stockCheck from '@/assets/photos/stock-check.jpg'
import supportAgent from '@/assets/photos/support-agent.jpg'
import technicianDrill from '@/assets/photos/technician-drill.jpg'
import technicianPlantRoom from '@/assets/photos/technician-plant-room.jpg'
import techniciansPanel from '@/assets/photos/technicians-panel.jpg'
import warehouseAnalytics from '@/assets/photos/warehouse-analytics.jpg'
import warehouseTeam from '@/assets/photos/warehouse-team.jpg'

/** Editorial photos from the Fleet photo library, referenced by id from page data. */
export const photos = {
  acFilterService,
  apartmentBuilding,
  colleaguesTablets,
  dataCenter,
  engineersRooftop,
  factoryTechnician,
  hotelHousekeeping,
  hvacTechnicians,
  inspectionClipboard,
  mallAtrium,
  partnerMeeting,
  stockCheck,
  supportAgent,
  technicianDrill,
  technicianPlantRoom,
  techniciansPanel,
  warehouseAnalytics,
  warehouseTeam,
}

export type PhotoId = keyof typeof photos

export type Photo = { id: PhotoId; alt: string }
