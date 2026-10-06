import apartmentBuilding from '@/assets/photos/apartment-building.jpg'
import colleaguesTablets from '@/assets/photos/colleagues-tablets.jpg'
import dataCenter from '@/assets/photos/data-center.jpg'
import engineersRooftop from '@/assets/photos/engineers-rooftop.jpg'
import factoryTechnician from '@/assets/photos/factory-technician.jpg'
import hotelHousekeeping from '@/assets/photos/hotel-housekeeping.jpg'
import hvacTechnicians from '@/assets/photos/hvac-technicians.jpg'
import inspectionClipboard from '@/assets/photos/inspection-clipboard.jpg'
import mallAtrium from '@/assets/photos/mall-atrium.jpg'
import managerOnCall from '@/assets/photos/manager-on-call.jpg'
import operationsDesk from '@/assets/photos/operations-desk.jpg'
import partnerMeeting from '@/assets/photos/partner-meeting.jpg'
import propertyManagerTablet from '@/assets/photos/property-manager-tablet.jpg'
import residentsNewHome from '@/assets/photos/residents-new-home.jpg'
import stockCheck from '@/assets/photos/stock-check.jpg'
import supportAgent from '@/assets/photos/support-agent.jpg'
import teamPresentation from '@/assets/photos/team-presentation.jpg'
import technicianPlantRoom from '@/assets/photos/technician-plant-room.jpg'
import vendorHandshake from '@/assets/photos/vendor-handshake.jpg'
import warehouseAnalytics from '@/assets/photos/warehouse-analytics.jpg'
import warehouseTeam from '@/assets/photos/warehouse-team.jpg'

/** Editorial photos from the Fleet photo library, referenced by id from page data. */
export const photos = {
  apartmentBuilding,
  colleaguesTablets,
  dataCenter,
  engineersRooftop,
  factoryTechnician,
  hotelHousekeeping,
  hvacTechnicians,
  inspectionClipboard,
  mallAtrium,
  managerOnCall,
  operationsDesk,
  partnerMeeting,
  propertyManagerTablet,
  residentsNewHome,
  stockCheck,
  supportAgent,
  teamPresentation,
  technicianPlantRoom,
  vendorHandshake,
  warehouseAnalytics,
  warehouseTeam,
}

export type PhotoId = keyof typeof photos

export type Photo = { id: PhotoId; alt: string }
