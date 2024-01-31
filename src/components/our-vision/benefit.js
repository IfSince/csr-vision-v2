import { LongTermProfitability } from '../../svg/icons/benefits/long-term-profitability.js'
import { ImprovedCorporateImage } from '../../svg/icons/benefits/improved-corporate-image.js'
import { MarketDifferentiation } from '../../svg/icons/benefits/market-differentiation.js'
import { EmployeeRetention } from '../../svg/icons/benefits/employee-retention.js'
import { RiskManagement } from '../../svg/icons/benefits/risk-management.js'
import { InvestorRelations } from '../../svg/icons/benefits/investor-relations.js'

const benefitIcons = {
  'long-term-profitability': <LongTermProfitability/>,
  'improved-corporate-image': <ImprovedCorporateImage/>,
  'market-differentiation': <MarketDifferentiation/>,
  'employee-retention': <EmployeeRetention/>,
  'risk-management': <RiskManagement/>,
  'investor-relations': <InvestorRelations/>,
}

export const Benefit = ({ title, description, icon }) =>
  <article
    className="text-white grow rounded-sm px-6 py-8 bg-accent min-w-[min(calc(100vw_-_(var(--horizontal-spacing)_*_2)_-_20px),400px)] text-heading-3 md:py-10">
    <div className="flex items-center justify-center h-[2.75em] w-[2.75em]">{ benefitIcons[icon] }</div>
    <h3 className="text-h3 mt-[2em]">{ title }</h3>
    <p className="mt-4 justify-self-end text-base">{ description }</p>
  </article>