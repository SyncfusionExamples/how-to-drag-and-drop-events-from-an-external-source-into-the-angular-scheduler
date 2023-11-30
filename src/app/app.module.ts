import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';

import { TreeViewModule, AccordionModule, ToolbarModule, ContextMenuModule, BreadcrumbModule, CarouselModule, 
         TabModule, SidebarModule, MenuModule, AppBarModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule, RecurrenceEditorModule, TreeViewModule, AccordionModule, ToolbarModule, ContextMenuModule, BreadcrumbModule, CarouselModule, TabModule, SidebarModule, MenuModule, AppBarModule, 
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
