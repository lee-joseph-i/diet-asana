class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id

    @updated_user = User.find_by(
      first_name: params[:project][:owner][:first_name],
      last_name: params[:project][:owner][:last_name]
      )
    @project.owner_id = @updated_user.id
    if @project.save
      # @project.owner_id = @updated_user.id # note: this doesn't work AFTER you save the project. 
      render 'api/projects/show'
    else
      render json: ['Please name your project.'], status: 422
    end
  end

  def index
    @projects = Project.all
    # render "api/projects/index"
  end

  # def show
  #   @project = Project.find(params[:id])
  # end

  def update
    @project = Project.find(params[:id])
    @project.section_will_change! # Joseph-Review
    project_params[:section] = [] unless project_params[:section] # Joseph-Review
    if @project.update(project_params)
          render :show
    else
      render json: ['Please name your project.'], status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    if @project
      @project.destroy
      render :show
    else
      render json: ['Project not found!']
    end
  end


  private

  def project_params
    params.require(:project).permit(:name, :owner_id, :description, :owner)
  end
end
