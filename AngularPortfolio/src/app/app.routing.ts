import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';





const appRoutes: Routes = [ 

	{
	  path: '',
	  component: WelcomeComponent
	},

	{
	  path: 'about',
	  component: AboutComponent
	},

	{
	 path: 'contact',
	 component: ContactComponent
	},

	{
	 path: 'projects',
	 component: ProjectsComponent
	}


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
