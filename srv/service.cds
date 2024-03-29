using { riskmanagment as my } from '../db/schema';

service RiskService{
  entity Risks @(restrict : [
{
grant : [ 'READ' ],
to : [ 'RiskViewer' ]
},
{
grant : [ '*' ],
to : [ 'RiskManager' ]
}
]) as projection on my.Risks;
  annotate Risks with @odata.draft.enabled;
  entity Mitigations @(restrict : [
{
grant : [ 'READ' ],
to : [ 'RiskViewer' ]
},
{
grant : [ '*' ],
to : [ 'RiskManager' ]
}
]) as projection on my.Mitigations;
  annotate Mitigations with @odata.draft.enabled;
  entity Impacts as projection on my.impacts;
  entity BusinessPartners as projection on my.BusinessPartners;
  
}