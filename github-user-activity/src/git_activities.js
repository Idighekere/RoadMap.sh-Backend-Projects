export const displayActivities=(event)=>{


    const repoName = event.repo.name
    let issueNumber = event.payload?.issue?.number
    let pullRequestNumber = event.payload.pull_request?.number

    if(event.length==0){
        console.error('No activity found');

        return
    }

    const eventType=event.type

    let action
    switch (eventType) {
        case "PushEvent":
            let commitsCount = event.payload?.commits?.length

            action=`pushed ${commitsCount} to ${repoName}`
            break;
        case 'WatchEvent':
            action =`starred ${repoName}`
            break
        case 'IssuesEvent':
            action=`${event.payload.action} an issue in ${repoName}`
            break
        case 'IssueCommentEvent':
            action = `commented on issue ${issueNumber} in ${repoName}`
            break
        case 'PullRequestEvent':
            action=`created pull request ${pullRequestNumber} in ${repoName}`

            break
        case 'PullRequestReviewEvent':
            action=`reviewed pull request ${pullRequestNumber} in ${repoName}`
            break
        case 'PullRequestReviewCommentEvent':
            action=`commented on pull request ${pullRequestNumber} in ${repoName}`
            break
        case 'CreateEvent':
            action=`created ${event.payload?.ref_type} ${event.payload?.ref || repoName} ${event.payload?.ref_type=='repository'? '':`in ${repoName}`}`
            break
        default:
            action=`${eventType.replace('Event','')} in ${repoName}`

            break;
    }
    console.log(`- ${action}`);


}
