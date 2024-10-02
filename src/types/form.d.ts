interface IFormData {
  memberNumber: string
  joinDate: string
  fullName: string
  gender: string
  placeAndDateOfBirth: string
  religion: string
  address: {
    street: string
    neighborhoodNumber: string
    hamletNumber: string
    villageNumber: string
    subdistrict: string
    district: string
    postalCode: string
  }
  idCardNumber: string
  taxNumber: string
  occupation: string
  business: string
  businessAddress: {
    street: string
    neighborhoodNumber: string
    hamletNumber: string
    villageNumber: string
    subdistrict: string
    district: string
    postalCode: string
  }
  phoneNumber: string
  email: string
  heirName: string
  relationshipWithHeir: "Child" | "Spouse" | "Parent" | "Other"
  deposits: {
    principalSavings: number | 50_000 // Rp. 50,000
    mandatorySavings: number | 25_000 // Rp. 25,000
    voluntarySavings?: number
  }
}
