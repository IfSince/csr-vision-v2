import { TeamMember } from './team-member.js'

export const TeamMemberList = ({ teamMembers }) =>
  <div className="flex sm:justify-end">
    <div className="grid w-full grid-cols-1 gap-x-4 gap-y-12 sm:w-fit sm:grid-cols-2 lg:grid-cols-3">
      {
        teamMembers.map(member => <TeamMember { ...member } key={ member.id }/>)
      }
    </div>
  </div>