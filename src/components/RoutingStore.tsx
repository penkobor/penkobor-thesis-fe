import * as React from 'react'
import { observable } from 'mobx';

export class RoutingStore {
    @observable admissions = false
    @observable students = false
    @observable staff = false
    @observable research = false
    @observable enterpriseAndMedia = false
    @observable faculty = false
    @observable WhyCTU = false
    @observable ExchangePrograms = false
    @observable ErasmusIs = false
    @observable BelateralIs = false
    @observable summerTimeTableIs = false
    @observable winterTimetableIs = false
    @observable basicRulesIs = false
    @observable exceptionalCasesIs = false
    @observable classesInEngIs = false
    @observable transferToFacultyIs = false
    @observable timeTable = false
    @observable bachelorProgramsIs = false
    @observable masterProgramsIs = false

    openMasterPrograms = () => {
      this.closeEverything()
      this.masterProgramsIs = true
    }
    openAdmission = () => {
        this.closeEverything()
        this.admissions = true
      }

      openBachelorPrograms = () => {
        this.closeEverything()
        this.bachelorProgramsIs = true
      }

      openTransferToFaculty = () => {
        this.closeEverything()
        this.transferToFacultyIs = true
      }

      openClassesInEng = () => {
        this.closeEverything()
        this.classesInEngIs = true
      }

      openExceptionalCases = () => {
        this.closeEverything()
        this.exceptionalCasesIs = true
      }

      openBasicRulse = () => {
        this.closeEverything()
        this.basicRulesIs = true
      }
      
      openWhyCTU = () => {
        this.closeEverything()
        this.WhyCTU = true
      }
  
      openStudents = () => {
        this.closeEverything()
        this.students = true
      }
  
      openFaculty = () => {
        this.closeEverything()
        this.faculty = true
      }
  
      openEnterprise = () => {
        this.closeEverything()
        this.enterpriseAndMedia = true
      }
  
      openResearch = () => {
        this.closeEverything()
        this.research = true
      }
  
      openStaff = () => {
        this.closeEverything()
        this.staff = true
      }

      openExchangePrograms = () => {
        this.closeEverything()
        this.ExchangePrograms = true
      }

      openErasmus = () => {
        this.closeEverything()
        this.ErasmusIs = true
      }

      openBelateral = () => {
        this.closeEverything()
        this.BelateralIs = true
      }

      openSummerTimeTable = () => {
        this.closeEverything()
        this.summerTimeTableIs = true
      }
      openWinterTimeTable = () => {
        this.closeEverything()
        this.winterTimetableIs = true
      }

      openTimeTable = () => {
        this.closeEverything()
        this.timeTable = true
      }
      closeEverything = () => {
        this.admissions = false
        this.enterpriseAndMedia = false
        this.faculty = false
        this.research = false
        this.staff = false
        this.students = false
        this.WhyCTU = false
        this.ExchangePrograms = false
        this.BelateralIs = false
        this.ErasmusIs = false
        this.summerTimeTableIs = false
        this.winterTimetableIs = false
        this.basicRulesIs = false
        this.exceptionalCasesIs = false
        this.classesInEngIs = false
        this.transferToFacultyIs = false
        this.timeTable = false
        this.bachelorProgramsIs = false
        this.masterProgramsIs = false
      }
}
