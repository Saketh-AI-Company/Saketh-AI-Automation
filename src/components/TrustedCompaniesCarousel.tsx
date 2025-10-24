import React from 'react'
import { Sparkles } from 'lucide-react'

interface CompanyLogo {
  name: string
  logoUrl: string
}

const companyLogos: CompanyLogo[] = [
  { name: 'Google Sheets', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Sheets_2020_Logo.svg' },
  { name: 'Gmail', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' },
  { name: 'OpenAI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'Slack', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Telegram', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
  { name: 'Google Gemini', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
  { name: 'Airtable', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg' },
  { name: 'Google Drive', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg' },
  { name: 'Webhook', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webhook.svg' },
  { name: 'Supabase', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg' },
  { name: 'Notion', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Discord', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg' },
  { name: 'PostgreSQL', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg' },
  { name: 'MySQL', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
  { name: 'GitHub', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
  { name: 'Google Calendar', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
  { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg' },
  { name: 'Microsoft SQL Server', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg' },
  { name: 'HubSpot', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg' },
  { name: 'GraphQL', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/graphql.svg' },
  { name: 'X (Twitter)', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg' },
  { name: 'Redis', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg' },
  { name: 'SendGrid', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sendgrid.svg' },
  { name: 'Jira', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jira.svg' },
  { name: 'Trello', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/trello.svg' },
  { name: 'WooCommerce', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/woo.svg' },
  { name: 'AWS S3', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazons3.svg' },
  { name: 'Microsoft Outlook', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoutlook.svg' },
  { name: 'Google Docs', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg' },
  { name: 'Spotify', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg' },
  { name: 'WhatsApp', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg' },
  { name: 'Stripe', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg' },
  { name: 'Calendly', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/calendly.svg' },
  { name: 'Salesforce', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg' },
  { name: 'Microsoft Teams', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftteams.svg' },
  { name: 'Dropbox', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dropbox.svg' },
  { name: 'Mailchimp', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg' },
  { name: 'Asana', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/asana.svg' },
  { name: 'Reddit', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reddit.svg' },
  { name: 'WordPress', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg' },
  { name: 'GitLab', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gitlab.svg' },
  { name: 'Monday.com', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mondaydotcom.svg' },
  { name: 'Shopify', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg' },
  { name: 'LinkedIn', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg' },
  { name: 'Google Analytics', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleanalytics.svg' },
  { name: 'Zoho CRM', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoho.svg' },
  { name: 'Zoom', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg' },
  { name: 'Snowflake', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snowflake.svg' }
]

const TrustedCompaniesCarousel: React.FC = () => {
  // Duplicate for seamless loop
  const duplicatedLogos = [...companyLogos, ...companyLogos]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-dark-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Seamless Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
            Connect with <span className="text-gradient">Your Tools</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Integrate with 50+ platforms and services you already use
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-50 via-dark-50 to-transparent z-10"></div>
          
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-marquee hover:pause-marquee">
              {duplicatedLogos.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  <div className="group relative w-32 h-32 bg-white border-2 border-dark-100 rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:border-primary-300 hover:shadow-xl hover:-translate-y-1">
                    <img
                      src={company.logoUrl}
                      alt={`${company.name} logo`}
                      className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="text-dark-700 font-semibold text-xs text-center">${company.name}</div>`
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dark-500 text-sm">And many more platforms with custom integrations</p>
        </div>
      </div>

      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%) }
            100% { transform: translateX(-50%) }
          }
          
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
          
          .pause-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  )
}

export default TrustedCompaniesCarousel
