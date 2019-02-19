import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { SiteInformation, SiteTheme } from 'tanam-models';
import { SiteService } from '../../../services/site.service';
import { SiteThemeService } from '../../../services/site-theme.service';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit, OnDestroy {
  readonly siteName$: Observable<string> = this.siteSettingsService.getSiteName();
  readonly themes$: Observable<SiteTheme[]> = this.themeService.getThemes();
  readonly settingsForm: FormGroup = this.formBuilder.group({
    title: [null, [Validators.required]],
    theme: [null, [Validators.required]],
  });

  private settingsSubscription: Subscription;

  constructor(
    private readonly siteSettingsService: SiteService,
    private readonly themeService: SiteThemeService,
    private readonly formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.settingsSubscription = this.siteSettingsService.getSiteInfo().subscribe(settings => {
      console.log(`[SettingsSiteComponent] site settings: ${JSON.stringify(settings)}`);
      this.settingsForm.setValue({
        title: settings.title,
        theme: settings.theme,
      });
    });
  }

  ngOnDestroy() {
    if (this.settingsSubscription && !this.settingsSubscription.closed) {
      this.settingsSubscription.unsubscribe();
    }
  }

  saveSettings() {
    const formData = this.settingsForm.value;
    return this.siteSettingsService.save(formData as SiteInformation);
  }
}
