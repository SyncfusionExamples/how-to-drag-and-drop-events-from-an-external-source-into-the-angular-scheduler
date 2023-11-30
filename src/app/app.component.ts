import { Component, ViewChild } from '@angular/core';
import { CellClickEventArgs, EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { hospitalData, waitingList } from './data';
import { DragAndDropEventArgs, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { closest} from '@syncfusion/ej2-base';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild('treeview') treeviewObj !: TreeViewComponent;
  @ViewChild('schedule') schedulerObj !: ScheduleComponent;
  public eventSettings: EventSettingsModel = {
    dataSource: hospitalData,
  };

  public field: Record<string, any> = { dataSource: waitingList, id: 'Id', text: 'Name' }

  public onDragStop(args: DragAndDropEventArgs){
    let scheduleElem: Element = closest(args.target, '.e-content-wrap') as Element;
    if(scheduleElem && args.target.classList.contains('e-work-cells')){
      let treeViewData: Record<string, any>[] = this.treeviewObj.fields.dataSource as Record<string, any>[];
      let filteredData: Record<string, any>[] = treeViewData.filter(
        (item: any) => item.Id === parseInt(args.draggedNodeData['id'] as string, 10)
      );
      let cellData: CellClickEventArgs = this.schedulerObj.getCellDetails(args.target);
      let eventData: Record<string, any> = {
        Id: this.schedulerObj.getEventMaxID(),
        Subject: filteredData[0]['Name'],
        Description: filteredData[0]['Description'],
        StartTime: cellData.startTime,
        EndTime: cellData.endTime,
        IsAllDay: cellData.isAllDay
      }
      this.schedulerObj.openEditor(eventData, 'Add', true);
      let updatedList: Record<string, any>[] = treeViewData.filter(
        (item: any) => item.Id !== parseInt(args.draggedNodeData['id'] as string, 10)
      ); 
      this.treeviewObj.fields.dataSource = updatedList;
    }
  }
}
