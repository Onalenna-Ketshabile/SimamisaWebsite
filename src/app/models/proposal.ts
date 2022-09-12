export interface Proposal {
    ID: number,
    PickUpTime: string,
    PickUpPlace: string,
    DropOffTime: string,
    NumberToGive: number,
    ProposalComment: string,
    ProposalType: string,
    AmountGiven: string,
    isFulfilled: boolean,
    isAccepted: boolean,
    itemNeedID:number,
    registeredUserID:number
}
