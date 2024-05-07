const equipment = require('./page-details/equipment');
const skidSteersLoaders = require('./page-details/skid-steer-loaders');
const technology = require('./page-details/technology');
const workwear = require('./page-details/workwear');
const airCompressors = require('./page-details/air-compressors');
const backhoeLoaders = require('./page-details/backhoe-loaders');
const compactExcavators = require('./page-details/compact-excavators');
const compactTrackLoaders = require('./page-details/compact-track-loaders');
const dozers = require('./page-details/dozers');
const excavators = require('./page-details/excavators');
const arVr = require('./page-details/ar-vr');
const droneSystems = require('./page-details/drone-systems');
const electronicDistanceMeasurement = require('./page-details/electronic-distance-measurement');
const photogrammetry = require('./page-details/photogrammetry');
const bim = require('./page-details/bim');
const ModelingSoftwareCad = require('./page-details/modeling-software-cad');
const sketchDesignSoftware = require('./page-details/sketch-design-software');
const designQualityControl = require('./page-details/design-quality-control');
const marketplaceNewEquipment = require('./page-details/marketplace-new-equipment');
const marketplaceNewTalent = require('./page-details/marketplace-new-talent');
const marketplaceParts = require('./page-details/marketplace-parts');
const marketplaceRentals = require('./page-details/marketplace-rentals');
const marketplaceUsed = require('./page-details/marketplace-used');
const threeDPrinting = require('./page-details/three-d-printing');
const prefabOffsite = require('./page-details/prefab-offsite');
const procurementSupplyChain = require('./page-details/procurement-supply-chain');
const assetTracking = require('./page-details/asset-tracking');
const constructionSiteDrones = require('./page-details/construction-site-drones');
const fleetAssetManagementSoftware = require('./page-details/fleet-asset-management-software');
const gisLocationIntelligence = require('./page-details/gis-location-intelligence');
const gpsAssetTracking = require('./page-details/gps-asset-tracking');
const gpsMachineControl = require('./page-details/gps-machine-control');
const iotEquipmentReliabilityServices = require('./page-details/iot-equipment-reliability-services');
const constructionRobotics = require('./page-details/construction-robotics');
const certificationManagement = require('./page-details/certification-management');
const communicationEquipment = require('./page-details/communication-equipment');
const facilityManagementRemoteMonitoring = require('./page-details/facility-management-remote-monitoring');
const fieldProductivitySoftware = require('./page-details/field-productivity-software');
const constructionSafety = require('./page-details/construction-safety');
const jobSiteSecurityCameras = require('./page-details/job-site-security-cameras');
const constructionWearables = require('./page-details/construction-wearables');
const workManagementSchedulingSoftware = require('./page-details/work-management-scheduling-software');
const businessIntelligence = require('./page-details/business-intelligence');
const biddingEstimatingTools = require('./page-details/bidding-estimating-tools');
const constructionCrm = require('./page-details/construction-crm');
const eamCmms = require('./page-details/eam-cmms');
const constructionErp = require('./page-details/construction-erp');
const fieldServiceManagement = require('./page-details/field-service-management');
const accountingFinanceTools = require('./page-details/accounting-finance-tools');
const hcmPayrollHrSoftware = require('./page-details/hcm-payroll-hr-software');
const marketData = require('./page-details/market-data');
const projectManagementSoftware = require('./page-details/project-management-software');
const workOrderManagement = require('./page-details/work-order-management');
const workwearBoots = require('./page-details/workwear-boots');
const workwearGlasses = require('./page-details/workwear-glasses');
const workwearGloves = require('./page-details/workwear-gloves');
const hardHatsHeadwear = require('./page-details/hard-hats-headwear');
const highVisibility = require('./page-details/high-visibility');
const workwearOuterwear = require('./page-details/workwear-outerwear');
const workwearPants = require('./page-details/workwear-pants');

module.exports = {
  recommended: {
    title: 'Recommended Content',
    tocHeader: 'Select a Persona:',
  },
  // @todo confirm wistia still is valid and needs to be here.
  equipment,
  technology,
  workwear,
  // EQUIPMENT
  'product-categories/earthmoving/skid-steer-loaders': skidSteersLoaders,
  'product-categories/portable-power/air-compressors': airCompressors,
  'product-categories/earthmoving/backhoe-loaders': backhoeLoaders,
  'product-categories/earthmoving/compact-excavators': compactExcavators,
  'product-categories/earthmoving/compact-track-loaders': compactTrackLoaders,
  'product-categories/earthmoving/dozers': dozers,
  'product-categories/earthmoving/excavators': excavators,
  // TECHNOLOGY
  'product-categories/technology-and-software/site-data-capture/augmented-or-virtual-reality-systems': arVr,
  'product-categories/technology-and-software/site-data-capture/drone-systems': droneSystems,
  'product-categories/technology-and-software/site-data-capture/electronic-distance-measurement': electronicDistanceMeasurement,
  'product-categories/technology-and-software/site-data-capture/photogrammetry': photogrammetry,
  'product-categories/technology-and-software/modeling-and-design-tools/bim': bim,
  'product-categories/technology-and-software/modeling-and-design-tools/3d-modeling-software-cad-earthworks': ModelingSoftwareCad,
  'product-categories/technology-and-software/modeling-and-design-tools/sketch-design': sketchDesignSoftware,
  'product-categories/technology-and-software/modeling-and-design-tools/design-quality-control': designQualityControl,
  'product-categories/technology-and-software/marketplace/new-equipment': marketplaceNewEquipment,
  'product-categories/technology-and-software/marketplace/new-talent-workforce': marketplaceNewTalent,
  'product-categories/technology-and-software/marketplace/parts': marketplaceParts,
  'product-categories/technology-and-software/marketplace/rental': marketplaceRentals,
  'product-categories/technology-and-software/marketplace/used-equipment': marketplaceUsed,
  'product-categories/technology-and-software/materials-logistics-management/3d-printing': threeDPrinting,
  'product-categories/technology-and-software/materials-logistics-management/prefabrication-offsite-construction': prefabOffsite,
  'product-categories/technology-and-software/materials-logistics-management/procurement-and-supply-chain-management': procurementSupplyChain,
  'product-categories/technology-and-software/equipment-automation/asset-tracking-devices': assetTracking,
  'product-categories/technology-and-software/equipment-automation/construction-site-drones': constructionSiteDrones,
  'product-categories/technology-and-software/equipment-automation/fleet-asset-management-software': fleetAssetManagementSoftware,
  'product-categories/technology-and-software/equipment-automation/gis-locaton-intelligence': gisLocationIntelligence,
  'product-categories/technology-and-software/equipment-automation/gps-asset-tracking-fleet-management': gpsAssetTracking,
  'product-categories/technology-and-software/equipment-automation/gps-machine-control': gpsMachineControl,
  'product-categories/technology-and-software/equipment-automation/iot-equipment-reliability-services': iotEquipmentReliabilityServices,
  'product-categories/technology-and-software/equipment-automation/construction-robotics': constructionRobotics,
  'product-categories/technology-and-software/communication-safety/certification-management-software': certificationManagement,
  'product-categories/technology-and-software/communication-safety/communication-equipment': communicationEquipment,
  'product-categories/technology-and-software/communication-safety/facility-management-remote-monitoring-software-and-systems': facilityManagementRemoteMonitoring,
  'product-categories/technology-and-software/communication-safety/field-productivity-software': fieldProductivitySoftware,
  'product-categories/technology-and-software/communication-safety/construction-safety-systems': constructionSafety,
  'product-categories/technology-and-software/communication-safety/job-site-security-cameras-and-systems': jobSiteSecurityCameras,
  'product-categories/technology-and-software/communication-safety/construction-wearables': constructionWearables,
  'product-categories/technology-and-software/communication-safety/work-management-scheduling-software': workManagementSchedulingSoftware,
  'product-categories/technology-and-software/business-financial-tools/business-intelligence-predictive-analytics': businessIntelligence,
  'product-categories/technology-and-software/business-financial-tools/bidding-estimating-tools': biddingEstimatingTools,
  'product-categories/technology-and-software/business-financial-tools/construction-crm-customer-relationship-management': constructionCrm,
  'product-categories/technology-and-software/business-financial-tools/eam-cmms-enterprise-asset-management-computerized-maintenance-management': eamCmms,
  'product-categories/technology-and-software/business-financial-tools/construction-erp-enterprise-resource-planning-software': constructionErp,
  'product-categories/technology-and-software/business-financial-tools/field-service-management-software': fieldServiceManagement,
  'product-categories/technology-and-software/business-financial-tools/accounting-financial-tools-job-costing-software': accountingFinanceTools,
  'product-categories/technology-and-software/business-financial-tools/hcm-payroll-hr-software': hcmPayrollHrSoftware,
  'product-categories/technology-and-software/business-financial-tools/construction-market-data-or-competitor-intelligence': marketData,
  'product-categories/technology-and-software/business-financial-tools/project-management-software': projectManagementSoftware,
  'product-categories/technology-and-software/business-financial-tools/work-order-management-software': workOrderManagement,
  // WORKWEAR
  'product-categories/workwear/boots': workwearBoots,
  'product-categories/workwear/glasses': workwearGlasses,
  'product-categories/workwear/gloves': workwearGloves,
  'product-categories/workwear/hard-hats-headwear': hardHatsHeadwear,
  'product-categories/workwear/high-visibility': highVisibility,
  'product-categories/workwear/outerwear': workwearOuterwear,
  'product-categories/workwear/pants': workwearPants,
};
