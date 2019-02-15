import { Routes } from "@angular/router";
import { SpeakerlistComponent } from './speakerlist/speakerlist.component';
import { SpeakerformComponent } from './speakerform/speakerform.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticleformComponent } from './articleform/articleform.component';
import { KeyspeakerlistComponent } from './keyspeakerlist/keyspeakerlist.component';
import { KeyspeakerformComponent } from './keyspeakerform/keyspeakerform.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberformComponent } from './memberform/memberform.component';
import { TestimoniallistComponent } from './testimoniallist/testimoniallist.component';
import { TestimonialformComponent } from './testimonialform/testimonialform.component';
import { PowernewslistComponent } from './powernewslist/powernewslist.component';
import { PowernewsformComponent } from './powernewslist/powernewsform/powernewsform.component';
import { AssociatecategoryformComponent } from './associatecategorylist/associatecategoryform/associatecategoryform.component';
import { AssociatecategorylistComponent } from './associatecategorylist/associatecategorylist.component';
import { AssociatelistComponent } from './associatelist/associatelist.component';
import { AssociateformComponent } from './associatelist/associateform/associateform.component';
import { PressformComponent } from './presslist/pressform/pressform.component';
import { PresslistComponent } from './presslist/presslist.component';
import { WhatnewformComponent } from './whatnewlist/whatnewform/whatnewform.component';
import { WhatnewlistComponent } from './whatnewlist/whatnewlist.component';
import { WattswisdomlistComponent } from './wattswisdomlist/wattswisdomlist.component';
import { WattswisdomformComponent } from './wattswisdomlist/wattswisdomform/wattswisdomform.component';
import { PolicyrecommendationlistComponent } from './policyrecommendationlist/policyrecommendationlist.component';
import { PolicyrecommendationformComponent } from './policyrecommendationlist/policyrecommendationform/policyrecommendationform.component';
import { ResearchreportcategorylistComponent } from './researchreportcategorylist/researchreportcategorylist.component';
import { ResearchreportcategoryformComponent } from './researchreportcategorylist/researchreportcategoryform/researchreportcategoryform.component';
import { ResearchreportformComponent } from './researchreportlist/researchreportform/researchreportform.component';
import { ResearchreportlistComponent } from './researchreportlist/researchreportlist.component';
import { InvestorformComponent } from './investorlist/investorform/investorform.component';
import { InvestorlistComponent } from './investorlist/investorlist.component';
import { PolicyrecommendationviewComponent } from './policyrecommendationlist/policyrecommendationview/policyrecommendationview.component';
import { FilterdataPipe } from './filterdata.pipe';
import { SpeakerdetailsComponent } from './speakerdetails/speakerdetails.component';



export const containers = [SpeakerlistComponent, SpeakerformComponent, ArticlelistComponent, ArticleformComponent,
    KeyspeakerlistComponent, KeyspeakerformComponent, MemberlistComponent, MemberformComponent,
    TestimoniallistComponent, TestimonialformComponent, PowernewslistComponent, PowernewsformComponent,
    AssociatecategorylistComponent, AssociatecategoryformComponent, AssociatelistComponent, AssociateformComponent
    , PresslistComponent, PressformComponent, WhatnewlistComponent, WhatnewformComponent, WattswisdomlistComponent, WattswisdomformComponent
    , PolicyrecommendationlistComponent, PolicyrecommendationformComponent,PolicyrecommendationviewComponent, ResearchreportcategorylistComponent, ResearchreportcategoryformComponent
    , ResearchreportlistComponent, ResearchreportformComponent, InvestorlistComponent, InvestorformComponent,
    SpeakerdetailsComponent,FilterdataPipe]
export const routes: Routes = [
    { path: "speaker", component: SpeakerlistComponent , data:{title:'Speeaker List'}},
    { path: "speakerform", component: SpeakerformComponent },
    { path: "speakerform/:id", component: SpeakerformComponent },
    { path: "article", component: ArticlelistComponent },
    { path: "articleform", component: ArticleformComponent },
    { path: "articleform/:id", component: ArticleformComponent },
    { path: "keyspeaker", component: KeyspeakerlistComponent },
    { path: "keyspeakerform", component: KeyspeakerformComponent },
    { path: "keyspeakerform/:id", component: KeyspeakerformComponent },
    { path: "member", component: MemberlistComponent },
    { path: "memberform", component: MemberformComponent },
    { path: "memberform/:id", component: MemberformComponent },
    { path: "testimonial", component: TestimoniallistComponent },
    { path: "testimonialform", component: TestimonialformComponent },
    { path: "testimonialform/:id", component: TestimonialformComponent },
    { path: "powernews", component: PowernewslistComponent },
    { path: "powernews/powernewsform", component: PowernewsformComponent },
    { path: "powernews/powernewsform/:id", component: PowernewsformComponent },
    { path: "associatecategory", component: AssociatecategorylistComponent },
    { path: "associatecategory/associatecategoryform", component: AssociatecategoryformComponent },
    { path: "associatecategory/associatecategoryform/:id", component: AssociatecategoryformComponent },
    { path: "associate", component: AssociatelistComponent },
    { path: "associate/associateform", component: AssociateformComponent },
    { path: "associate/associateform/:id", component: AssociateformComponent },
    { path: "press", component: PresslistComponent },
    { path: "press/pressform", component: PressformComponent },
    { path: "press/pressform/:id", component: PressformComponent },
    { path: "whatnew", component: WhatnewlistComponent },
    { path: "whatnew/whatnewform", component: WhatnewformComponent },
    { path: "whatnew/whatnewform/:id", component: WhatnewformComponent },
    { path: "wattswisdom", component: WattswisdomlistComponent },
    { path: "wattswisdom/wattswisdomform", component: WattswisdomformComponent },
    { path: "wattswisdom/wattswisdomform/:id", component: WattswisdomformComponent },
    { path: "policyrecommendation", component: PolicyrecommendationlistComponent },
    { path: "policyrecommendation/policyrecommendationform", component: PolicyrecommendationformComponent },
    { path: "policyrecommendation/policyrecommendationform/:id", component: PolicyrecommendationformComponent },
    { path: "policyrecommendation/policyrecommendationview/:id",component:PolicyrecommendationviewComponent},

    {path:"researchreportcategory", component:ResearchreportcategorylistComponent},
    {path:"researchreportcategory/researchreportcategoryform",component:ResearchreportcategoryformComponent},
    {path:"researchreportcategory/researchreportcategoryform/:id",component:ResearchreportcategoryformComponent},
    
    {path:"researchreport",component:ResearchreportlistComponent},
    {path:"researchreport/researchreportform",component:ResearchreportformComponent},
    {path:"researchreport/researchreportform/:id",component:ResearchreportformComponent},
    {path:"investor",component:InvestorlistComponent},
    {path:"investor/investorform",component:InvestorformComponent},
    {path:"investor/investorform/:id",component:InvestorformComponent},
]